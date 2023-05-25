const { db } = require("../db");
const { Sequelize } = require("sequelize");
const { Pet, Shelter, User } = require("../index");

async function seed() {
    try {
        await db.sync({ force: true });
        //create mainShelter and pets
        const mainShelter = await Shelter.create({
            name: "Main Shelter",
        });
        const jimmy = await Pet.create({
            name: "Jimmy",
            species: "Dog",
            breed: "Mixed",
            age: "2 years",
            primaryColor: "Black",
            secondaryColor: "White",
        });
        const lola = await Pet.create({
            name: "Lola",
            species: "Cockatoo",
            age: "3 years",
            primaryColor: "White",
            secondaryColor: "Yellow",
        });
        mainShelter.addPets([jimmy, lola]);

        //create user and pets
        const jack = await User.create({
            username: "jack.b",
            password: "password",
        });
        const mrJinx = await Pet.create({
            name: "Mr. Jinx",
            species: "Cat",
            breed: "Longhair",
            age: "6 years",
            primaryColor: "Grey Tabby",
            secondaryColor: "White",
        });
        jack.addPet(mrJinx);

        //create admin user
        const admin = await User.create({
            username: "admin",
            password: "admin",
            isAdmin: "true",
        });
        return "Database successfully seeded";
    } catch (error) {
        return error;
    }
}
module.exports = seed;
