require("dotenv").config();
const express = require("express");
const seed = require("../db/seed/seed");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: ADD ADMIN USER AUTH ASAP
app.get("/seed", async (req, res, next) => {
    const seeded = await seed();
    res.send(`<p>${seeded}</p>`);
});

module.exports = app;
