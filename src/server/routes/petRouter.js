const { Router } = require("express");
const petRouter = Router();
const { Pet } = require("../../../db");

// pets/ - GET - view list of all pets
petRouter.get("/", async (req, res, next) => {
    try {
        const pets = await Pet.findAll({ where: { shelterId: 1 } });
        res.status(200).send(pets);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// pets/:petId - GET - view listing of {petId}
petRouter.get("/:petId", async (req, res, next) => {
    const petId = req.params.petId;
    try {
        const pet = await Pet.findOne({ where: { petId } });
        res.status(200).send(pet);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// TODO: Add auth middleware
// pets/new - POST - new pet - auth required - admin
/* req.body format:
 ** {
 ** name: STRING,
 ** species: STRING,
 ** breed?: STRING,
 ** age?: STRING,
 ** primaryColor: STRING,
 ** secondaryColor?: STRING,
 ** picture?: STRING
 ** }
 */
petRouter.post("/new", async (req, res, next) => {
    const newPet = req.body;
    try {
        const pet = await Pet.create(newPet);
        res.status(200).send(pet);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// TODO: Add auth middleware
// TODO: finish
// pets/:petId/edit - POST - edit {petId} - auth required - admin
petRouter.post("/:petId/edit", async (req, res, next) => {});

// TODO: Add auth middleware
// TODO: finish
// pets/:petId/delete - DELETE - delete {petId} - auth required - admin
petRouter.delete("/:petId/delete", async (req, res, next) => {});

module.exports = { petRouter };
