require("dotenv").config();
const crypto = require("crypto");
const fs = require("fs");

if (!process.env.JWT_SECRET) {
    const key = crypto.randomBytes(32).toString("hex");
    fs.appendFileSync(".env", `\nJWT_SECRET = ${key}`);
}
