const Animal = require("../models/animal.model")
const createAnimal = async (req, res) => {
    try {
        const animal = new Animal(req.body);
        await animal.save();
        res.json(animal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = { createAnimal };
