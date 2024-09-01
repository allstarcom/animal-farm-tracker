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

const editAminal = async (req, res) => {
    try {
        const animal = await Animal.findOneAndUpdate(req.params.id, req.body);
        res.json(animal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const editAllAminals = async (req, res) => {
    try {
        const animals = await Animal.updateMany({}, req.body);
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id);
        res.json(animal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }    
};

const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSpecificAnimal = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        res.json(animal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createAnimal };
