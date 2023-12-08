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
export const Recipe = sequelize.define("recipes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    recipeUniqueName: {
        field: "recipe_unique_name",
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    procedure: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    timeInMinutes: {
        field: "time_in_minutes",
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    avgRating: {
        field: "avg_rating",
        type: DataTypes.DOUBLE, //by default defaultValue will be null and the column will accept null
    },
    imgUrl: {
        field: "img_url",
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
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
