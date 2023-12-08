const router = express.Router();
import express from "express";
import { validationResult } from "express-validator";
import * as repository from "../../persistence/favorites-repository.js";
import { isAuthenticated } from "../../middleware/auth-middleware.js";
import { createAuthorizer } from "../../middleware/authorization-middleware.js"
import * as validations from "../../validations/favorite-validations.js";
import { User } from "../../models/User.js";
import { checkIfIsAdmin } from "../../persistence/users-repository.js";
import { Favorite } from "../../models/Favorite.js";
import { Rating } from "../../models/Rating.js"
import { Recipe } from "../../models/Recipe.js";
import { getTagsByRecipe } from "../../persistence/tags-repository.js";
import * as helper from '../../helper/helper.js'
import { NotFoundError, BadRequestError, ConflictError } from "../../helper/index.js"



router.get("/users/:username/favorites", isAuthenticated, createAuthorizer(req => req.params.username), validations.validateGetFavorites, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const user = await User.findOne({
      where: { username: req.params.username },
      raw: true
    })

    if (user === null) {
      return next(new NotFoundError("This user doesn't exist in DB."));
    };

    //Setting Pagination
    const query = Object.assign({}, req.query)

    query.limit = helper.validateLimit(query.limit)
    query.page = helper.validatePage(query.page)
    query.offset = (query.page - 1) * query.limit

    //Retrieving the favorites recipes by user, it is an Array of Recipe's IDs and calling other Tables to get data
    //and build a recipe summary object. 
    const favorites = await repository.getAllFavoritesByUser(user.id, query);
    const recipesId = favorites.favorites.map(favorite => favorite.recipe_id)

    let recipes = []

    //Iterate through recipsId to build an object for each recipe. 
    for (let i = 0; i < recipesId.length; i++) {

      const recipesSummaries = await Recipe.findByPk(recipesId[i], {
        attributes: ['title', 'recipe_unique_name','createdAt', 'updatedAt', 'avg_rating', 'img_url']
      });

      const totalRatings = await Rating.count({ where: { recipe_id: recipesId[i] } })
      const tags = await getTagsByRecipe(recipesId[i]);
      const tagsTitles = tags.map(tag => tag.tags)

      const currentRecipe = 
        {
          "title": recipesSummaries.dataValues.title,
          "totalRatings": totalRatings,
          "username": user.username,
          "tags": tagsTitles,
          "createdAt": recipesSummaries.dataValues.createdAt,
          "updatedAt": recipesSummaries.dataValues.updatedAt,
          "recipeUniqueName": recipesSummaries.dataValues.recipe_unique_name,
          "avgRating": recipesSummaries.dataValues.avg_rating,
          "imgUrl": recipesSummaries.dataValues.img_url
        }


      recipes.push(currentRecipe);
    }

    //Define the results for pagination.
    const pages = helper.getPages(favorites.count, query.limit, query.page)

    //Building Response
    const response = {
      "count": favorites.count,
      "limit": query.limit,
      "currentPage": query.page,
      "previousPage": pages.previousPage,
      "nextPage": pages.nextPage,
      "totalPages": pages.totalPages,
      "results": recipes
    }

    res.status(200).json({ "favorites": response })

  } catch (error) {
    next(error)
  }

})

router.get("/users/:username/favorites/:recipeName", isAuthenticated, createAuthorizer(req => req.params.username), validations.validateFavoritePath, async (req, res, next) => {
  try {

    const results = validationResult(req);
    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const user = await User.findOne({
      where: { username: req.params.username },
      raw: true
    });

    if (user === null) {
      return next(new NotFoundError("User was not found."));
    };

    const recipe = await Recipe.findOne({
      attributes: ['id', 'title', 'recipe_unique_name' ,'createdAt', 'updatedAt', 'avg_rating', 'img_url'],
      where: { recipe_unique_name: req.params.recipeName },
      raw: true
    });

    if (recipe === null) {
      return next(new NotFoundError("Recipe was not found."));
    };

    const response = await repository.getFavoriteByUserAndByRecipe(user.id, recipe.id);

    if (response === null) {
      return next(new NotFoundError("Favorite was not found."))
    }

    const totalRatings = await Rating.count({ where: { recipe_id: recipe.id } })
    const tags = await getTagsByRecipe(recipe.id);
    const tagsTitles = tags.map(tag => tag.tags)

    const formatedResponse =
    {
      "title": recipe.title,
      "totalRatings": totalRatings,
      "username": user.username,
      "tags": tagsTitles,
      "createdAt": recipe.createdAt,
      "updatedAt": recipe.updatedAt,
      "recipeUniqueName": recipe.recipe_unique_name,
      "avgRating": recipe.avg_rating,
      "imgUrl": recipe.img_url
    }


    res.status(200).json(formatedResponse);

  } catch (error) {
    // Error handling
    next(error)
  }
});

router.delete("/users/:username/favorites/:recipeName", isAuthenticated, createAuthorizer(req => req.params.username), validations.validateFavoritePath, async (req, res, next) => {
  try {

    const results = validationResult(req);
    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const user = await User.findOne({
      where: { username: req.params.username },
      raw: true
    });

    if (user === null) {
      return next(new NotFoundError("This user was not found in DB."));
    };

    const recipe = await Recipe.findOne({
      attributes: ['id', 'title'],
      where: { recipe_unique_name: req.params.recipeName },
      raw: true
    });

    if (recipe === null) {
      return next(new NotFoundError("Recipe was not found."));
    };

    const isAFavorite = await Favorite.findAll({
      attributes: ['recipe_id'],
      where: { user_id: user.id },
      raw: true
    })

    const recipesIDs = isAFavorite.map(favorites => favorites.recipe_id);

    if (!recipesIDs.includes(recipe.id)) {
      return next(new NotFoundError(`Recipe : ${recipe.title}, is not a favorite for this user.`));
    }

    const response = await repository.deleteFavoriteByUserAndRecipeName(user.id, recipe.id)

    res.status(200).json({ "message": `The recipe ${recipe.title} was sucessully removed from ${user.username}'s favorites.` });

  } catch (error) {
    // Error handling
    next(error)
  }
});


router.post("/users/:username/favorites/:recipeName", isAuthenticated, createAuthorizer(req => req.params.username), validations.validateFavoritePath, async (req, res, next) => {

  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err)
    }

    const usernameEndpoint = req.params.username;
    const recipeName = req.params.recipeName;
    const user = await User.findOne({ where: { username: usernameEndpoint }, raw: true });

    if (user === null) {
      return next(new NotFoundError("User was not found."));
    };

    const recipe = await Recipe.findOne({
      attributes: ['id', 'title'],
      where: { recipe_unique_name: req.params.recipeName },
      raw: true
    });

    if (recipe == null) {
      return next(new NotFoundError("Recipe was not found."));
    }

    const isAlreadyFavorite = await Favorite.findOne({
      where: {
        recipe_id: recipe.id,
        user_id: user.id
      }
    })

    if (isAlreadyFavorite) {
      next(new ConflictError(`Add to Favorites Failed: The selected recipe is already in ${user.username}'s favorites list.`));
    }


    const response = await repository.createFavoriteByUserAndRecipeName(user.id, recipe.id)


    res.status(200).json({ "Message": `The recipe ${recipe.title} was sucessfully add as favorite for ${user.username}.` })

  } catch (error) {
    next(error)
  }
})

export default router;
