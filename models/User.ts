import * as Sequelize from "sequelize";

class User extends Sequelize.Model {
    username: string;
    createdAt: Date;
}
export const InitUser = (sequelize: Sequelize.Sequelize) => {
    User.init({
        username: Sequelize.DataTypes.STRING,
        createdAt: Sequelize.DataTypes.DATE
    }, {
        sequelize, tableName: "Users"
    })
};