const { Model, DataTypes } = require("sequelize");
const { db } = require("../db");

class Pet extends Model {}

Pet.init(
    {
        petId: {
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
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Unknown",
        },
        age: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        primaryColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        secondaryColor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:
                "https://pets.hsppr.org/sites/default/files/default_images/hsppr-pet-placeholder_0.png",
        },
    },
    { sequelize: db }
);

module.exports = Pet;
