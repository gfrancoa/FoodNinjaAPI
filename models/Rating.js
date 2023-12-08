import { Sequelize, DataTypes } from "sequelize";
import { Recipe } from "./Recipe.js";
import { User } from "./User.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);
export const Rating = sequelize.define("ratings", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //createdAt, updatedAt are created automatically with sequelize
  userId: {
    field: "user_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  recipeId: {
    field: "recipe_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Recipe,
      key: "id",
    },
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
});
