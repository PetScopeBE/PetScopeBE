require("dotenv").config();
const request = require("supertest");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SALT_COUNT = 10;
const { JWT_SECRET } = process.env;

const app = require("../index");
const { db, Pet, User, Shelter } = require("../../../db");

const createTestUser = async ({ username, password }) => {
    const hashed = await bcrypt.hash(password, SALT_COUNT);
    const user = await User.create({ username, password: hashed });
    const { id, username: createdUsername } = user;
    const token = jwt.sign({ id, username: createdUsername }, JWT_SECRET);
    return { user, token };
};

//TODO: test view pets
// all pets
// by id

//TODO: test add pet

//TODO: test edit pet

//TODO: test delete pet
