import { Sequelize, QueryTypes } from "sequelize";
import { getOffset } from "../helper/helper.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export async function getChefByName(name) {
  const query = "SELECT `users`.`username`,`users`.`name`, `chefs`.`biography`, `chefs`.`img_url` AS `imgUrl` FROM `chefs` AS `chefs` LEFT JOIN `users` AS `users` ON `users`.`id` = `chefs`.`user_id` WHERE `users`.`username` = ?"

  const chef = await sequelize.query(query, {
    replacements: [name],
    type: QueryTypes.SELECT
  })

  return chef;
}

const whereSubquery = "WHERE `users`.`username` = ? ";
const joinUserSubquery =
  " LEFT JOIN `users` AS `users` ON `recipes`.`user_id`=`users`.`id` ";

function getChefRecipesQuery(page, limit, username) {

  const selectFromSummariesSubquery =
    "SELECT `recipes`.`recipe_unique_name`, `recipes`.`title`, `recipes`.`avg_rating`,COUNT(`ratings`.`id`) AS totalRatings,`recipes`.`img_url`,`users`.`username`,`tags`.`tags`,`recipes`.`createdAt`,`recipes`.`updatedAt` FROM `recipes` AS `recipes` ";

  const joinTagsSubquery =
    "LEFT JOIN (SELECT `tags_by_recipes`.`recipe_id`, JSON_ARRAYAGG(`tags`.`title`) as `tags` FROM `tags_by_recipes` AS `tags_by_recipes` LEFT JOIN `tags` AS `tags` ON `tags_by_recipes`.`tag_id`=`tags`.`id` GROUP BY `tags_by_recipes`.`recipe_id`) AS `tags` ON `recipes`.`id` = `tags`.`recipe_id` ";

  const joinIngredientsSubquery =
    "LEFT JOIN( SELECT `ingredient_amounts`.`recipe_id`, JSON_ARRAYAGG(JSON_OBJECT('name',`ingredients`.`title`,'unit',`ingredient_amounts`.`unit`)) as `ingredients` FROM `ingredient_amounts` AS `ingredient_amounts`  LEFT JOIN `ingredients` AS `ingredients` ON `ingredient_amounts`.`ingredient_id`=`ingredients`.`id`  GROUP BY `ingredient_amounts`.`recipe_id`) AS `ingredients` ON `recipes`.`id` = `ingredients`.`recipe_id` ";

  const joinRatings =
    "LEFT JOIN `ratings` AS `ratings` ON `recipes`.`id`=`ratings`.`recipe_id` ";

  const groupBySubquery = "GROUP BY `recipes`.`id` ";

  const orderByRecent = "ORDER BY createdAt DESC "
  const offset = getOffset(page, limit);
  const limitOffsetSubquery = `LIMIT ? OFFSET ?`;

  return {
    sql:
      selectFromSummariesSubquery +
      joinTagsSubquery +
      joinIngredientsSubquery +
      joinUserSubquery +
      joinRatings +
      whereSubquery +
      groupBySubquery +
      orderByRecent +
      limitOffsetSubquery,
    params: [username, limit, offset],
  };
}

export async function getRecipesByChef(page, limit, name) {

  const query = getChefRecipesQuery(page, limit, name);

  console.log("queryyyyyyy", query)

  const recipes = await sequelize.query(query.sql
    , {
      replacements: query.params,
      type: QueryTypes.SELECT
    }
  )

  return recipes;
}

export async function getRecipesCountByChef(name) {

  const selectFromCountSubquery =
    "SELECT COUNT(`recipes`.`recipe_unique_name`) AS count FROM `recipes`";

  return await sequelize.query(selectFromCountSubquery + joinUserSubquery + whereSubquery
    , {
      replacements: [name],
      type: QueryTypes.SELECT
    }
  );
}