const { Model, DataTypes } = require("sequelize");
const { db } = require("../db");

class Shelter extends Model {}

Shelter.init(
    {
        shelterId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize: db }
);

module.exports = Shelter;
