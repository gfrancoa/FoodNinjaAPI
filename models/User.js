import { Sequelize, DataTypes } from "sequelize";
import { Role } from "./Role.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(55),
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  password: {
    type: DataTypes.CHAR(60).BINARY,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
  },
  //createdAt, updatedAt are created automatically with sequelize

  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: "id",
    },
  },
});
