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
export const Review = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  //createdAt, updatedAt are created automatically with sequelize
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Recipe,
      key: "id",
    },
  },
});
