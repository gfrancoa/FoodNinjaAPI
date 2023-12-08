const router = express.Router();
import express from "express";
import * as ratingsRepository from "../../persistence/ratings-repository.js";
import * as recipesRepository from "../../persistence/recipes-repository.js";
import * as usersRepository from "../../persistence/users-repository.js";
import { validationResult } from "express-validator";
import * as ratingsValidations from "../../validations/ratings-validations.js";
import { isAuthenticated } from "../../middleware/auth-middleware.js";
import { createAuthorizer } from "../../middleware/authorization-middleware.js";
import { NotFoundError, BadRequestError, ConflictError, UnauthorizedError } from "../../helper/index.js"


router.get("/users/:username/ratings/:recipeName", isAuthenticated, ratingsValidations.validateGetRating, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await recipesRepository.getRecipeByUniqueName(req.params.recipeName)

    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist."));
    }

    const requestedUser = await usersRepository.getUser(req.params.username, req.params.username)

    if (requestedUser.dataValues.username === null) {
      return next(new NotFoundError("The user does not exist"));
    }

    const isAdmin = await usersRepository.checkIfIsAdmin(requestedUser.dataValues.role_id)

    if (req.session.username != req.params.username && isAdmin === false) {
      return next(new UnauthorizedError("The requested rating does not belong to the logged user"));
    }

    const response = await ratingsRepository.getRating(req.params.username, req.params.recipeName);

    if (response === null) {
      return next(new NotFoundError("Rating not found"));
    }
    return res.status(200).json(response)

  } catch (error) {
    next(error)
  }
})

router.post("/users/:username/ratings/:recipeName", isAuthenticated, ratingsValidations.validateCreateRating, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await recipesRepository.getRecipeByUniqueName(req.params.recipeName)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist."));
    }

    const requestedUser = await usersRepository.getUser(req.params.username, req.params.username)

    if (requestedUser.dataValues.username === null) {
      return next(new NotFoundError("The user does not exist"));
    }

    const isAdmin = await usersRepository.checkIfIsAdmin(requestedUser.dataValues.role_id)

    if (req.session.username != req.params.username && isAdmin === false) {
      return next(new UnauthorizedError("The logged user and the requested user do not match"));
    }

    const existingRating = await ratingsRepository.getRating(req.params.username, req.params.recipeName);
    //Validate a rating does not exist
    if (existingRating != null) {
      return next(new ConflictError("There can only be one rating given to a recipe."));
    } else {
      const response = await ratingsRepository.createRating(req.params.username, req.params.recipeName, req.body.rating)
      return res.status(201).json(response)
    }

  } catch (error) {
    next(error)
  }
})

router.patch("/users/:username/ratings/:recipeName", isAuthenticated,createAuthorizer(req => req.params.username), ratingsValidations.validateUpdateRating, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await recipesRepository.getRecipeByUniqueName(req.params.recipeName)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist"));
    }

    const requestedUser = await usersRepository.getUser(req.params.username, req.params.username)

    if (requestedUser.dataValues.username === null) {
      return next(new NotFoundError("The user does not exist"));
    }

    const isAdmin = await usersRepository.checkIfIsAdmin(requestedUser.dataValues.role_id)

    if (req.session.username != req.params.username && isAdmin === false) {
      return next(new UnauthorizedError("You must be the author of this rating to modify it"));
    }

    const userRating = await ratingsRepository.getRating(req.params.username, req.params.recipeName);

    if (isAdmin === false && userRating == null) {
      return next(new NotFoundError("Rating does not exist for the requested username and recipe name provided."));
    }

    const rowsUpdated = await ratingsRepository.updateRating(req.params.username, req.body.rating, req.params.recipeName);

    if (rowsUpdated > 0) {
      const response = { message: "Rating updated successfully." };
      return res.status(200).json(response);
    } else {
      const err = new Error();
      err.status = 500;
      err.message = "Error updating rating";
      return next(err);
    }



  } catch (error) {
    next(error)
  }
})

router.delete("/users/:username/ratings/:recipeName", isAuthenticated,createAuthorizer(req => req.params.username), ratingsValidations.validateDeleteRating, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await recipesRepository.getRecipeByUniqueName(req.params.recipeName)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist"));
    }

    const requestedUser = await usersRepository.getUser(req.params.username, req.params.username)

    if (requestedUser.dataValues.username === null) {
      return next(new NotFoundError("The user does not exist"));
    }

    const isAdmin = await usersRepository.checkIfIsAdmin(requestedUser.dataValues.role_id)

    if (req.session.username != req.params.username && isAdmin === false) {
      return next(new UnauthorizedError("You must be the author of this rating to modify it"));
    }

    const userRating = await ratingsRepository.getRating(req.params.username, req.params.recipeName);

    if (isAdmin === false && userRating == null) {
      return next(new NotFoundError("Rating does not exist for the requested username and recipe name provided."));
    }

    const rowsDeleted = await ratingsRepository.deleteRating(req.params.username, req.params.recipeName);

    if (rowsDeleted > 0) {
      const response = { message: "Rating deleted successfully." };
      return res.status(200).json(response);
    } else {
      const err = new Error();
      err.status = 500;
      err.message = "Error deleting rating";
      return next(err);
    }

  } catch (error) {
    next(error)
  }
})

export default router