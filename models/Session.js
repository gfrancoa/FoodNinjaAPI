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

export const Session = sequelize.define(
    "sessions",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        //createdAt, updatedAt are created automatically with sequelize
        start_date: {
            type: DataTypes.DATE(6),
            allowNull: false,
        },
        extension_date: {
            type: DataTypes.DATE(6),
            allowNull: false,
        },
        expirydate: {
            type: DataTypes.DATE(6),
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
    },
    {
        timestamps: false,
    }
);
