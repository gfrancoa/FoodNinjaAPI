import { Rating } from "../models/Rating.js"
import { getUser } from "./users-repository.js"
import { getRecipeByUniqueName } from "./recipes-repository.js"
import { Sequelize, where } from "sequelize";
import { Recipe } from "../models/Recipe.js";

export async function getRating(username, recipeName) {
  const user = await getUser(username)
  const recipe = await getRecipeByUniqueName(recipeName)

  let rating = await Rating.findOne({
    attributes: ["id", "rating"],
    where: Sequelize.and(
      { user_id: user.id },
      { recipe_id: recipe.id }
    )
  })

  if (rating != null)
    rating = { id: rating.id, rating: rating.rating, recipeAuthor: user.username }

  return rating;
}

export async function getRatingById(ratingId) {

  const rating = await Rating.findOne({
    where: { id: ratingId },
  })

  return rating;
}

export async function createRating(username, recipeName, rating) {
  const user = await getUser(username)
  const recipe = await getRecipeByUniqueName(recipeName)

  const createdRating = await Rating.create({
    userId: user.id, recipeId: recipe.id, rating: rating
  })

  const [data] = await Rating.findAll({
    attributes: [[Sequelize.fn("avg", Sequelize.col("rating")), "avgRating"]]
    , where: { recipeId: recipe.id }
  });

  const avgRating = data.dataValues.avgRating

  const updatedRecipe = await Recipe.update({
    avgRating
  }, {
    where: {
      recipeUniqueName: recipeName
    }
  })

  console.log("result updated recipe", updatedRecipe)


  return { id: createdRating.id, rating: createdRating.rating, ratingAuthor: user.username };
}

export async function updateRating(username, rating, recipeName) {
  const user = await getUser(username)
  const recipe = await getRecipeByUniqueName(recipeName)

  const rowsUpdated = await Rating.update({
    rating: rating
  }, {
    where: Sequelize.and(
      { user_id: user.id },
      { recipe_id: recipe.id }
    )
  })

  const [data] = await Rating.findAll({
    attributes: [[Sequelize.fn("avg", Sequelize.col("rating")), "avgRating"]]
    , where: { recipeId: recipe.id }
  });

  const avgRating = data.dataValues.avgRating

  const updatedRecipe = await Recipe.update({
    avgRating
  }, {
    where: {
      recipeUniqueName: recipeName
    }
  })


  return rowsUpdated[0];
}

export async function deleteRating(username, recipeName) {

  const user = await getUser(username)
  const recipe = await getRecipeByUniqueName(recipeName)

  const rowsDeleted = await Rating.destroy({
    where: Sequelize.and(
      { user_id: user.id },
      { recipe_id: recipe.id }
    )
  })

  const [data] = await Rating.findAll({
    attributes: [[Sequelize.fn("avg", Sequelize.col("rating")), "avgRating"]]
    , where: { recipeId: recipe.id }
  });

  const avgRating = data.dataValues.avgRating
  const updatedRecipe = await Recipe.update({
    avgRating: avgRating ?? null
  }, {
    where: {
      recipeUniqueName: recipeName
    }
  })

  return rowsDeleted;
}