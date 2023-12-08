import { Sequelize, DataTypes } from "sequelize";
import { Permission } from "./Permission.js";
import { Role } from "./Role.js";

const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
  }
);

export const PermissionByRole = sequelize.define(
  "permissions_by_role",
  {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Role,
        key: "id",
      },
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Permission,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
