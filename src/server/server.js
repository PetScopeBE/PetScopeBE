require("dotenv").config();

const app = require("./index");

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
