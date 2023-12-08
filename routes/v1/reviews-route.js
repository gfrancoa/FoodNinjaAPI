import express from 'express'
import * as repository from '../../persistence/reviews-repository.js'
import { getRecipeByName } from '../../persistence/recipes-repository.js'
import { validationResult } from 'express-validator'
import * as validations from '../../validations/reviews-validations.js'
import { isAuthenticated } from '../../middleware/auth-middleware.js'
import { Recipe } from '../../models/Recipe.js'
import { User } from '../../models/User.js'
import { Review } from '../../models/Review.js'
import { createAuthorizer } from '../../middleware/authorization-middleware.js'
import { NotFoundError, BadRequestError } from "../../helper/index.js"

const authorizer = createAuthorizer(async (req) => {
  const review = await Review.findOne({ where: { id: req.params.id }, raw: true });
  if (!review) {
    return null;
  }

  const user = await User.findByPk(review.user_id);
  if (!user) {
    return null;
  }

  return user.username;
});

const router = express.Router()


router.get("/recipes/:name/reviews", validations.validateGetReview, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const response = await repository.getReviewByName(req.params.name);
    if (response == null) {
      return next(new NotFoundError("Review not found"));
    }
    return res.status(200).json(response)

  } catch (error) {
    next(error)
  }
})

router.get("/recipes/:name/reviews/:id", async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const response = await repository.getReview(req.params.id, req.params.name);
    if (response == null) {
      return next(new NotFoundError("Review not found"));
    }
    return res.status(200).json(response)

  } catch (error) {
    next(error)
  }
})

router.delete("/recipes/:name/reviews/:id", isAuthenticated, authorizer, validations.validateDeleteReview, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const rowsDeleted = await repository.deleteReview(req.params.id, req.session.username, req.params.name);

    if (rowsDeleted > 0) {
      const response = { message: "Review deleted successfully." };
      return res.status(200).json(response);
    }

    return next(rowsDeleted)

  } catch (error) {
    next(error)
  }
})

router.put("/recipes/:name/reviews/:id", isAuthenticated, authorizer, validations.validatePUTReviewsById, async (req, res, next) => {
  try {

    const results = validationResult(req)
    if (!results.isEmpty()) {
      const err = new BadRequestError()
      err.errors = results.errors
      return next(err)
    }

    const recipe = await Recipe.findOne({ where: { recipe_unique_name: req.params.name }, raw: true });
    if (recipe === null) {
      return next(new NotFoundError("Recipe was not found."));

    }

    const review = await Review.findByPk(req.params.id, { raw: true });
    if (review === null) {
      return next(new NotFoundError("Review was not found."));
    }

    const user = await User.findByPk(review.user_id, { raw: true });

    if (!user) {
      return next(new NotFoundError("User was not found."));

    }

    if (review.recipe_id != recipe.id) {
      return next(new NotFoundError("This review don't belong to this recipe."));
    }

    const response = await repository.editReviewById(req.params.id, recipe.id, user.id, req.body)

    if (response === 0) {
      const err = new Error("Review was not updated for an internal error.");
      err.status = 500;
      return next(err);
    }

    res.status(200).json({ "message": "Review was updated successfully." })
  } catch (error) {
    next(error)
  }
})

router.patch("/recipes/:name/reviews/:id", isAuthenticated, authorizer, validations.validatePatchReviewsById, async (req, res, next) => {
  try {
    const results = validationResult(req)
    if (!results.isEmpty()) {
      const err = new BadRequestError()
      err.errors = results.errors
      return next(err)
    }

    const review = await Review.findByPk(req.params.id, { raw: true });

    if (review === null) {
      return next(new NotFoundError("Review was not found."));
    }

    const recipe = await Recipe.findOne({ where: { recipe_unique_name: req.params.name } })

    if (recipe === null) {
      return next(new NotFoundError("Recipe was not found."));
    }

    const user = await User.findByPk(review.user_id, { raw: true });

    if (user === null) {
      return next(new NotFoundError("Review's User was not found it."));
    }

    if (review.recipe_id != recipe.id) {
      return next(new NotFoundError("This review don't belong to this recipe."));
    }

    const response = await repository.editReviewFieldById(review, recipe.id, user.id, req.body)

    if (response === 0) {
      const err = new Error("Review was not updated for an internal error.");
      err.status = 500;
      return next(err);
    }


    res.status(200).json({ "message": `${user.username}'s review was sucessfully updated.` })
  } catch (error) {
    next(error)
  }
})

router.post("/recipes/:name/reviews", isAuthenticated, validations.validatePOSTReviews, async (req, res, next) => {
  const results = validationResult(req)
  if (!results.isEmpty()) {
    const err = new BadRequestError()
    err.errors = results.errors
    return next(err)
  }

  const response = await repository.createReview(req.session.username, req.params.name, req.body)

  if (response === "User not found.") {
    return next(new NotFoundError("User not found."))
  }
  if (response === "Recipe not found.") {
    return next(new NotFoundError("Recipe not found"))
  }

  res.status(200).json({
    "message": "Review was successfully created.",
    "reviewId": response
  })

})

export default router
