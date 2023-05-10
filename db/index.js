const Pet = require("./models/Pet");
const Shelter = require("./models/Shelter");
const User = require("./models/User");

User.hasMany(Pet, { foreignKey: "userId" });
Shelter.hasMany(Pet, { foreignKey: "shelterId" });

Pet.belongsTo(User, { foreignKey: "userId" });
Pet.belongsTo(Shelter, { foreignKey: "shelterId" });

module.exports = { Pet, Shelter, User };
