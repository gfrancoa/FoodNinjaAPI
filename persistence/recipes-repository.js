import { getOffset } from "../helper/helper.js";
import { Sequelize, Op, where, QueryTypes } from "sequelize";
import { Recipe } from "../models/Recipe.js";
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import { Tag } from "../models/Tag.js";
import { TagByRecipe } from "../models/TagByRecipe.js";
import { Ingredient } from "../models/Ingredient.js";
import { IngredientAmount } from "../models/IngredientAmount.js";
import * as helper from "../helper/helper.js"
import { getAllTags, getTags } from "./tags-repository.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

const selectFromSubquery =
  "SELECT `recipes`.`recipe_unique_name`, `recipes`.`title`, `recipes`.`description`, `recipes`.`procedure`, `recipes`.`servings`,`recipes`.`time_in_minutes`,`recipes`.`avg_rating`,`recipes`.`img_url`,`users`.`username` AS `username`,`tags`.`tags`,`ingredients`.`ingredients`,`recipes`.`createdAt`,`recipes`.`updatedAt` FROM `recipes` AS `recipes` ";

const selectFromCountSubquery =
  "SELECT COUNT(`recipes`.`recipe_unique_name`) AS count FROM `recipes`";

const selectFromSummariesSubquery =
  "SELECT `recipes`.`recipe_unique_name`, `recipes`.`title`, `recipes`.`avg_rating`,COUNT(`ratings`.`id`) AS totalRatings,`recipes`.`img_url`,`users`.`username`,`tags`.`tags`,`recipes`.`createdAt`,`recipes`.`updatedAt` FROM `recipes` AS `recipes` ";

const joinTagsSubquery =
  "LEFT JOIN (SELECT `tags_by_recipes`.`recipe_id`, JSON_ARRAYAGG(`tags`.`title`) as `tags` FROM `tags_by_recipes` AS `tags_by_recipes` LEFT JOIN `tags` AS `tags` ON `tags_by_recipes`.`tag_id`=`tags`.`id` GROUP BY `tags_by_recipes`.`recipe_id`) AS `tags` ON `recipes`.`id` = `tags`.`recipe_id` ";

const joinIngredientsSubquery =
  "LEFT JOIN( SELECT `ingredient_amounts`.`recipe_id`, JSON_ARRAYAGG(JSON_OBJECT('name',`ingredients`.`title`,'unit',`ingredient_amounts`.`unit`)) as `ingredients` FROM `ingredient_amounts` AS `ingredient_amounts`  LEFT JOIN `ingredients` AS `ingredients` ON `ingredient_amounts`.`ingredient_id`=`ingredients`.`id`  GROUP BY `ingredient_amounts`.`recipe_id`) AS `ingredients` ON `recipes`.`id` = `ingredients`.`recipe_id` ";

const joinRatings =
  "LEFT JOIN `ratings` AS `ratings` ON `recipes`.`id`=`ratings`.`recipe_id` ";
const joinUserSubquery =
  " LEFT JOIN `users` AS `users` ON `recipes`.`user_id`=`users`.`id` ";

const groupBySubquery = "GROUP BY `recipes`.`id` ";

const orderByRatings = "ORDER BY avg_rating DESC, totalRatings DESC ";

const orderByRecent = "ORDER BY createdAt DESC "

function getRecipesNoParams(page, limit, isSummarizedRecipe = false, isTopRecipes = false) {
  const offset = getOffset(page, limit);
  const limitOffsetSubquery = `LIMIT ? OFFSET ?`;

  return {
    sql:
      (isSummarizedRecipe ? selectFromSummariesSubquery : selectFromSubquery) +
      joinTagsSubquery +
      joinIngredientsSubquery +
      joinUserSubquery +
      (isSummarizedRecipe ? joinRatings : "") +
      groupBySubquery +
      (isTopRecipes ? orderByRatings : orderByRecent) +
      limitOffsetSubquery,
    sqlCount: selectFromCountSubquery,
    params: [limit, offset],
  };
}

function getRecipesFilters(page, limit, query, isSummarizedRecipe = false, isTopRecipes = false) {
  const offset = getOffset(page, limit);
  let limitOffsetSubquery = `LIMIT ? OFFSET ?`;

  const baseQuery = "WHERE ";
  const concatenation = "AND ";
  let params = [];

  let whereSubquery = baseQuery;
  for (let key in query) {
    let subquery;
    query[key].toLowerCase().trim();
    if (key === "search") {
      params.push(
        "%" + query[key] + "%",
        "%" + query[key] + "%",
        "%" + query[key] + "%"
      );
      if (!query.ingredients) {
        params.push("%" + query[key] + "%");
      }
      if (!query.tags) {
        params.push("%" + query[key] + "%");
      }
      subquery =
        "(`recipes`.`title` LIKE " +
        "?" +
        " OR `recipes`.`description` LIKE " +
        "?" +
        " OR `recipes`.`procedure` LIKE " +
        "? " +
        (query.ingredients
          ? " "
          : "OR `ingredients`.`ingredients` LIKE " + "? ") +
        (query.tags ? " " : "OR `tags`.`tags` LIKE " + "? ") +
        ")";
    } else if (key === "tags") {
      const tagsArray = query[key].split(",");
      subquery = "";
      tagsArray.map((tag, index) => {
        params.push("%" + tag + "%");
        if (index > 0) {
          subquery += "AND ";
        }
        subquery += "`tags`.`tags` LIKE " + "? ";
      });
    } else if (key === "ingredients") {
      const ingredientsArray = query[key].split(",");
      subquery = "";
      ingredientsArray.map((ingredient, index) => {
        params.push("%" + ingredient + "%");
        if (index > 0) {
          subquery += "AND ";
        }
        subquery += "`ingredients`.`ingredients` LIKE " + "? ";
      });
    } else if (key === "minRating") {
      params.push([query[key]]);
      subquery = "`recipes`.`avg_rating`>=" + "? ";
    } else if (key === "maxRating") {
      params.push([query[key]]);
      subquery = "`recipes`.`avg_rating`<=" + "? ";
    } else if (key === "featured") {
      subquery = "`tags`.`tags` LIKE '%featured%' ";
    }
    if (whereSubquery.length > 6) {
      whereSubquery += concatenation + subquery;
    } else {
      whereSubquery += subquery;
    }
  }

  const paramsForCountQuery = [...params];
  params.push(limit, offset);

  return {
    sql:
      (isSummarizedRecipe ? selectFromSummariesSubquery : selectFromSubquery) +
      joinTagsSubquery +
      joinIngredientsSubquery +
      joinUserSubquery +
      (isSummarizedRecipe ? joinRatings : "") +
      whereSubquery +
      groupBySubquery +
      (isTopRecipes ? orderByRatings : orderByRecent) +
      limitOffsetSubquery,

    sqlCount:
      selectFromCountSubquery +
      joinTagsSubquery +
      joinIngredientsSubquery +
      whereSubquery,
    params,
    paramsForCountQuery,
  };
}

function getRecipesQuery(query, isSummarizedRecipe = false, isTopRecipes = false) {

  const page = query.page;
  const limit = query.limit;
  const queryParams = Object.assign({}, query);

  const queryHasParameters =
    query.search ||
    query.tags ||
    query.ingredients ||
    query.minRating ||
    query.maxRating ||
    query.featured;

  if (queryHasParameters) {
    for (let key in queryParams) {
      if (
        key != "search" &&
        key != "tags" &&
        key != "ingredients" &&
        key != "minRating" &&
        key != "maxRating" &&
        key != "featured"
      ) {
        delete queryParams[key];
      }
    }

    return getRecipesFilters(page, limit, queryParams, isSummarizedRecipe, isTopRecipes);
  } else {
    return getRecipesNoParams(page, limit, isSummarizedRecipe, isTopRecipes);
  }
}

export async function getRecipes(query) {
  const resultingQueries = getRecipesQuery(query);

  const [countResult] = await sequelize.query(resultingQueries.sqlCount, {
    replacements: resultingQueries.paramsForCountQuery,
  });
  const rows = await sequelize.query(resultingQueries.sql, {
    replacements: resultingQueries.params,
    mapToModel: true,
    model: Recipe,
  });

  const count = countResult[0].count;

  return {
    count,
    results: rows,
  };
}

export async function getRecipesSummary(query) {
  const resultingQueries = getRecipesQuery(query, true);

  const [countResult] = await sequelize.query(resultingQueries.sqlCount, {
    replacements: resultingQueries.paramsForCountQuery,
  });
  const rows = await sequelize.query(resultingQueries.sql, {
    replacements: resultingQueries.params,
    mapToModel: true,
    model: Recipe,
  });

  const count = countResult[0].count;

  return {
    count,
    results: rows,
  };
}

export async function getRecipesByUserId(userId, query) {

  const recipes = await Recipe.findAll({
    limit: query.limit,
    offset: query.offset,
    where: { user_id: userId },
    raw: true,
  })


  const recipesCount = await Recipe.count({
    where: { user_id: userId },
    raw: true,
  })

  return {
    "count": recipesCount,
    "recipes": recipes
  }
}



export async function createRecipe(body) {

  //finding user id and role from username
  const user = await User.findOne({
    where: { username: body.username },
    attributes: ["id", "role_id"],
  });

  //finding role title from role id
  const role = await Role.findByPk(user.role_id);

  //getting tag ids from tag titles
  const tagIds = [];
  for (const tagTitle of body.tags) {
    const tag = await Tag.findOne({
      where: { title: tagTitle.toLowerCase() },
      attributes: ["id"],
    });
    tagIds.push(tag.id);
  }

  //add featured tag when recipe is published by chef
  if (role.title === "chef") {
    const tag = await Tag.findOne({
      where: { title: "featured" },
      attributes: ["id"],
    });
    tagIds.push(tag.id);
  }

  //generate Recipe unique name
  const recipeUniqueName = await generateRecipeUniqueName(body.title);

  //create Recipe
  const createdRecipe = await Recipe.create({
    recipeUniqueName: recipeUniqueName,
    title: body.title,
    description: body.description,
    procedure: body.procedure,
    servings: body.servings,
    timeInMinutes: body.timeInMinutes,
    imgUrl: body.imgUrl,
    user_id: user.id,
  });

  //create records in TagByRecipe
  for (const tagId of tagIds) {
    const recipeByTag = await TagByRecipe.create({
      recipe_id: createdRecipe.id,
      tag_id: tagId,
    });
  }

  //get ingredients ids from ingredient title or create ingredient and generate id
  const ingredientsInfo = [];

  for (const i in body.ingredients) {
    const [ingredient, created] = await Ingredient.findOrCreate({
      where: { title: body.ingredients[i].name.toLowerCase() },
    });
    ingredientsInfo.push({
      id: ingredient.id,
      unit: body.ingredients[i].unit,
    });
  }


  for (const ingredient of ingredientsInfo) {
    const ingredientAmountCreated = await IngredientAmount.create({
      recipe_id: createdRecipe.id,
      ingredient_id: ingredient.id,
      unit: ingredient.unit,
    });
  }

  return createdRecipe.recipeUniqueName;
}

export async function generateRecipeUniqueName(name) {
  let nameKebabCase = name.toLowerCase().replaceAll(" ", "-");
  const count = await Recipe.count({
    where: {
      recipe_unique_name: {
        [Op.like]: nameKebabCase + "%",
      },
    },
  });
  if (count > 0) {
    nameKebabCase = nameKebabCase + "-" + count;
  }

  return nameKebabCase;
}

export async function getRecipeByUniqueName(recipe_unique_name) {
  // Sequelize already prepare Queries to avoid sql injection.
  return await Recipe.findOne({
    where: {
      recipe_unique_name: recipe_unique_name,
    },
    raw: true
  });
}

export async function getRecipeByName(name) {
  // Sequelize already prepare Queries to avoid sql injection.
  const recipe = await Recipe.findOne({
    where: {
      recipe_unique_name: name
    },
    raw: true
  })

  if (!recipe) {
    return null
  }
  const user = await User.findByPk(recipe.user_id, { raw: true })

  const ingredientsAmount = await sequelize.query(`SELECT i.title AS name, ia.unit
                                                  FROM ingredient_amounts AS ia
                                                  INNER JOIN ingredients AS i on ia.ingredient_id = i.id
                                                  WHERE ia.recipe_id = :value`,
    {
      replacements: { value: recipe.id },
      type: QueryTypes.SELECT
    })


  const tags = await sequelize.query(`SELECT t.title as tags
                                      FROM tags_by_recipes as tr
                                      INNER JOIN tags t on tr.tag_id = t.id
                                      WHERE tr.recipe_id = :value;`,
    {
      replacements: { value: recipe.id },
      type: QueryTypes.SELECT
    })

  return {
    recipe: recipe,
    ingredientsAmount: ingredientsAmount.flat(),
    tags: tags.flat(),
    user: user
  }

}

export async function getRecipesTop(query) {
  const resultingQueries = getRecipesQuery(query, true, true);

  const [countResult] = await sequelize.query(resultingQueries.sqlCount, {
    replacements: resultingQueries.paramsForCountQuery,
  });
  const rows = await sequelize.query(resultingQueries.sql, {
    replacements: resultingQueries.params,
    mapToModel: true,
    model: Recipe,
  });

  const count = countResult[0].count;

  return {
    count,
    results: rows,
  };
}

export async function updateRecipeByName(recipe, body) {

  // Generate a new unique name to be updated.
  let newName = recipe.recipeUniqueName


  //Update Recipe
  Recipe.update({
    recipeUniqueName: recipe.recipeUniqueName,
    title: body.title,
    description: body.description,
    procedure: body.procedure,
    servings: body.servings,
    timeInMinutes: body.timeInMinutes,
    imgUrl: body.imgUrl,
  }, {
    where: {
      id: recipe.id
    }
  })

  // Get all ids by tags
  const tagsIds = getTags(body);

  // const tagIds = [];
  // for (let tagTitle in body.tags) {
  //   const tag = await Tag.findOne({
  //     where: { title: body.tags[tagTitle].toLowerCase() },
  //     attributes: ["id"],
  //   });
  //   tagIds.push(tag.id);
  // }

  await TagByRecipe.destroy({
    where: {
      recipe_id: recipe.id
    }
  });

  //Update all tags
  for (let i = 0; i < tagsIds.length; i++) {
    await TagByRecipe.create({
      recipe_id: recipe.id,
      tag_id: tagsIds[i]
    });
  }

  //Updating Ingredients
  const ingredientsInfo = [];

  for (let i in body.ingredients) {
    const [ingredient, created] = await Ingredient.findOrCreate({
      where: { title: body.ingredients[i].name.toLowerCase() },
    });
    if (created) {
      ingredientsInfo.push({
        id: created.id,
        unit: body.ingredients[i].unit,
      });
    } else {
      ingredientsInfo.push({
        id: ingredient.id,
        unit: body.ingredients[i].unit,
      });
    }
  }

  await IngredientAmount.destroy({ where: { recipe_id: recipe.id } })

  for (let ingredient in ingredientsInfo) {
    const ingredientAmountCreated = await IngredientAmount.create({
      recipe_id: recipe.id,
      ingredient_id: ingredientsInfo[ingredient].id,
      unit: ingredientsInfo[ingredient].unit,
    });
  }

  return await getRecipeByName(recipe.recipeUniqueName)


}

export async function updateRecipeFieldsByName(recipe, body) {

  const rowsAffected = await Recipe.update({
    title: body.title ? body.title : recipe.title,
    description: body.description ? body.description : recipe.description,
    procedure: body.procedure ? body.procedure : recipe.procedure,
    servings: body.servings ? body.servings : recipe.servings,
    recipeUniqueName: recipe.recipeUniqueName,
    timeInMinutes: body.timeInMinutes ? body.timeInMinutes : recipe.timeInMinutes,
    imgUrl: body.imgUrl ? body.imgUrl : recipe.imgUrl
  }, {
    where: {
      id: recipe.id
    }
  })

  if (body.tags) {
    const tagIds = await getTags(body);

    await TagByRecipe.destroy({
      where: {
        recipe_id: recipe.id
      }
    });

    for (const tagId of tagIds) {
      await TagByRecipe.create({
        tag_id: tagId,
        recipe_id: recipe.id
      });
    }
  }

  if (body.ingredients) {
    const ingredientsInfo = [];
    await IngredientAmount.destroy({
      where: {
        recipe_id: recipe.id
      }
    })

    for (const i in body.ingredients) {
      const [ingredient, created] = await Ingredient.findOrCreate({
        where: { title: body.ingredients[i].name.toLowerCase() },
      });
      ingredientsInfo.push({
        id: ingredient.id,
        unit: body.ingredients[i].unit,
      });
    }

    for (const ingredient of ingredientsInfo) {
      const ingredientAmountCreated = await IngredientAmount.create({
        recipe_id: recipe.id,
        ingredient_id: ingredient.id,
        unit: ingredient.unit,
      });

    }
  }
  return await getRecipeByName(recipe.recipeUniqueName)
}



export async function deleteRecipeByName(name) {

  // Since Recipe is the foundation for this system, if we delete a recipe instance here, it will cascade to all other dependent tables.
  return await Recipe.destroy({
    where: {
      recipe_unique_name: name
    }
  })
}