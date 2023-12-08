import { Sequelize, DataTypes } from "sequelize";
import { User } from "./User.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);
export const Chef = sequelize.define("chefs", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  //createdAt, updatedAt are created automatically with sequelize
});
