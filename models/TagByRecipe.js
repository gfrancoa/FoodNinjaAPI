import { Sequelize, DataTypes } from "sequelize";
import { Tag } from "./Tag.js";
import { Recipe } from "./Recipe.js";

const sequelize = new Sequelize(
    process.env.DATABASE_SCHEMA,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "mysql",
    }
);

export const TagByRecipe = sequelize.define(
    "tags_by_recipes",
    {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Recipe,
                key: "id",
            },
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Tag,
                key: "id",
            },
        },
    },
    {
        timestamps: false,
    }
);
