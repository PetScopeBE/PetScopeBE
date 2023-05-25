const { Router } = require("express");
const userRouter = Router();

// TODO: finish
// /users/:userId/pets - GET - view all pets of {userId}

// TODO: finish
// /users/:userId/pets/:petId - GET - view {petId} of {userId}

// TODO: Add auth middleware
// TODO: finish
// /users/:userId/pets/new - POST - new pet of {userId} - auth required - only available to {userId}
/* req.body format:
 ** {
 ** username: STRING,
 ** password: STRING,
 ** }
 */

// TODO: Add auth middleware
// TODO: finish
// /users/:userId/pets/:petId/edit - POST - edit {petId} of {userId} - auth required - only available to {userId}

// TODO: Add auth middleware
// TODO: finish
// /users/:userId/pets/:petId/delete - DELETE - delete {petId} of userId} - auth required - only available to {userId}

module.exports = { userRouter };
