import { Tag } from "../models/Tag.js";
import { Sequelize, QueryTypes } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export async function getAllTags() {
  const tags = await Tag.findAll({
    where: {
      title: {
        [Sequelize.Op.not]: 'featured'
      }
    }
  });

  return tags.map(tag => tag.dataValues.title);
}

export async function getTags(body) {
  let tagIds = []
  for (const tagTitle of body.tags) {
    const tag = await Tag.findOne({
      where: { title: tagTitle.toLowerCase() },
      attributes: ["id"],
    });
    tagIds.push(tag.id);
  }

  return tagIds;
}

export async function getTagsByRecipe(recipeId) {
  const tags = await sequelize.query(`SELECT t.title as tags
                                      FROM tags_by_recipes as tr
                                      INNER JOIN tags t on tr.tag_id = t.id
                                      WHERE tr.recipe_id = :value;`,
    {
      replacements: { value: recipeId },
      type: QueryTypes.SELECT
    })

  return tags;
}