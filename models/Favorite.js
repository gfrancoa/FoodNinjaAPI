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
export const Favorite = sequelize.define(
  "favorites",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Recipe,
        key: "id",
      },
    },
    //createdAt, updatedAt are created automatically with sequelize
  },
  {
    timestamps: false,
  }
);
