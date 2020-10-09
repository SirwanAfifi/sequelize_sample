import { Sequelize } from "sequelize";
import { InitUser } from "./models/User";

const sequelize = new Sequelize({
    dialect: "mysql",
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: +process.env.DATABASE_PORT || 3306
});

export const database = {
    sequelize,
    User: InitUser(sequelize)
}