require("dotenv").config();
const express = require("express");
const seed = require("../../db/seed/seed");

const app = express();
const { userRouter } = require("./routes/userRouter");
const { petRouter } = require("./routes/petRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pets", petRouter);
app.use("/users", userRouter);

//TODO: ADD ADMIN USER AUTH ASAP
app.get("/seed", async (req, res, next) => {
    const seeded = await seed();
    res.send(`<p>${seeded}</p>`);
});

module.exports = app;
