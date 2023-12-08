import { Recipe } from "../models/Recipe.js";
import { Review } from "../models/Review.js";
import { getRecipeByName } from "./recipes-repository.js";
import { getUser } from "./users-repository.js";
import { Sequelize } from 'sequelize';
import { User } from "../models/User.js";
import { checkIfIsAdmin } from "./users-repository.js";

export async function getReview(reviewId, recipeName) {


  const recipe = await getRecipeByName(recipeName)
  if (recipe === null) {
    return null;
  }
  const review = await Review.findOne({
    attributes: ["id", "title", "text"],
    where: Sequelize.and(
      { recipe_id: recipe.recipe.id },
      { id: reviewId}
    )
  })
  return review;
}

export async function getReviewByName(recipeName) {
  const recipe = await getRecipeByName(recipeName)
  const review = await Review.findAll({
    attributes: ["id", "title", "text"],
    where: Sequelize.and(
      { recipe_id: recipe.recipe.id }
    )
  })
  return review;
}

export async function deleteReview(reviewId, username, recipeName) {

  const user = await User.findOne({ where: { username: username } });
  const review = await Review.findByPk(reviewId);
  const recipe = await Recipe.findOne({
    where: { recipe_unique_name: recipeName },
    attributes: ['id', 'user_id']
  });

  if (user === null) {
    return new NotFoundError("User was not found.");
  }

  if (recipe === null) {
    return new NotFoundError("Recipe was not found.");
  }

  if (review === null) {
    return new NotFoundError("Review was not found.");
  }

  if (review.dataValues.recipe_id !== recipe.dataValues.id) {
    return new NotFoundError("This review ID doesn't belong to this recipe.");
  }

  if (user.dataValues.id != review.dataValues.user_id) {
    return new UnauthorizedError("This review wasn't posted by this user.");;
  }

  const isAdmin = await checkIfIsAdmin(user.dataValues.role_id);

  let rowsDeleted = []
  if (!isAdmin && user.dataValues.id === review.dataValues.user_id) {
    rowsDeleted = await Review.destroy({
      where: {
        id: reviewId,
        user_id: user.id
      }
    })
  }
  else {
    rowsDeleted = await Review.destroy({
      where: {
        id: reviewId,
      }
    })
  }
  return rowsDeleted;
}

export async function editReviewById(reviewId, recipeId, userId, body) {
  //In sequelize where clause, by default it is used "AND" operator. So in this following code, MUST matches id and recipe_id to properly 
  //update this review.

  const affectedRowCount = await Review.update({
    title: body.title,
    text: body.text
  }, {
    where: {
      id: reviewId,
      recipe_id: recipeId,
      user_id: userId
    }
  });

  return affectedRowCount[0]
}

export async function editReviewFieldById(review, recipeId, userId, body) {



  //In sequelize where clause, by default it is used "AND" operator. So in this following code, MUST matches id and recipe_id to properly 
  //update this review.

  const affectedRowCount = await Review.update({
    title: body.title ? body.title : review.title,
    text: body.text ? body.text : review.text
  }, {
    where: {
      id: review.id,
      recipe_id: recipeId,
      user_id: userId
    }
  })


  return affectedRowCount[0]
}

export async function createReview(username, recipeName, body) {

  const user = await getUser(username)
  const recipe = await Recipe.findOne({
    where: {
      recipe_unique_name: recipeName
    }
  })

  if (recipe === null) {
    return new NotFoundError("Recipe was not found.");
  }

  if (user === null) {
    return new NotFoundError("User was not found.");
  }

  const review = await Review.create({
    title: body.title,
    text: body.text,
    user_id: user.id,
    recipe_id: recipe.id
  })

  return review.id

}
