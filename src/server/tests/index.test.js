require("dotenv").config();
const request = require("supertest");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SALT_COUNT = 10;
const { JWT_SECRET } = process.env;

const app = require("../index");
const { db, Pet, User, Shelter } = require("../../../db");
const seed = require("../../../db/seed/seed");

describe("Test seed", () => {
    beforeAll(async () => {
        await seed();
    });
    it("should clear database", async () => {
        await User.create({ username: "user1", password: "pass1" });
        await seed();
        const removedUser = await User.findOne({ where: { username: "user1" } });
        expect(removedUser).toBeNull();
    });

    it("should seed main shelter with pets", async () => {
        const mainShelter = await Shelter.findOne({ where: { name: "Main Shelter" } });
        const shelterPets = await Pet.findAll({ where: { shelterId: mainShelter.shelterId } });
        expect(mainShelter).not.toBeNull();
        expect(shelterPets).toHaveLength(2);
    });

    it("should seed user with pets", async () => {
        const user = await User.findOne({ where: { username: "jack.b" } });
        const userPet = await Pet.findAll({
            where: { userId: user.userId },
        });
        expect(user).not.toBeNull();
        expect(userPet[0].name).toEqual("Mr. Jinx");
    });
});
