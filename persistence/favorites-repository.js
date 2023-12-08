import { Sequelize } from "sequelize";
import { Favorite } from "../models/Favorite.js";
import { User } from "../models/User.js";
import { Recipe } from "../models/Recipe.js";
import { Rating } from "../models/Rating.js"
import { getTagsByRecipe } from "./tags-repository.js";


export async function getAllFavoritesByUser(userId, query) {

  const favorites = await Favorite.findAll({
    limit: query.limit,
    offset: query.offset,
    where: {
      user_id: userId
    },
    raw : true
  })

  const favoritesCount = await Favorite.count({
    where: {
      user_id: userId
    },
    raw: true
  })

  return {
    "count": favoritesCount,
    "favorites" : favorites
  };
}

export async function deleteFavoriteByUserAndRecipeName(userId, recipeId) {

    const deletedRows = await Favorite.destroy({
      where: {
        recipe_id: recipeId,
        user_id: userId
      }
    })
  
  return deletedRows;
}

export async function getFavoriteByUserAndByRecipe(userId, recipeId) {
  const favorite = await Favorite.findOne({
    where: {
      recipe_id: recipeId,
      user_id: userId
    },
    raw: true
  })

  return favorite;
}

export async function createFavoriteByUserAndRecipeName(userId, recipeId) {
  
  const favorite = await Favorite.create({
    recipe_id: recipeId,
    user_id: userId
  })

  return favorite; 
}