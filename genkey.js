require("dotenv").config();
const randomBytes = require("crypto");
const appendFileSync = require("fs");

if (!process.env.JWT_SECRET) {
    const key = randomBytes(32).toString("hex");
    appendFileSync(".env", `\nJWT_SECRET = ${key}`);
}
