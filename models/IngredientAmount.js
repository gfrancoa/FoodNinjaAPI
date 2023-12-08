import { Sequelize, DataTypes } from "sequelize";
import { Recipe } from "./Recipe.js";
import { Ingredient } from "./Ingredient.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export const IngredientAmount = sequelize.define(
  "ingredient_amounts",
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
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Ingredient,
        key: "id",
      },
    },
    unit: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
