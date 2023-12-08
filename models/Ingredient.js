import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export const Ingredient = sequelize.define(
  "ingredients",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(55),
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
