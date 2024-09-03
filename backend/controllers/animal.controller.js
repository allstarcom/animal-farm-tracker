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


const editAnimal = async (req, res) => {
    try {
        const animal = await Animal.findOneAndUpdate(req.params.id, req.body);
        res.json(animal);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
};

const editAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.updateMany({}, req.body);
        res.json(animals);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const animal = await Animal.findByIdAndDelete(req.params.id);
        res.json(animal);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
};

const deleteSelectedAnimals = async (req, res) => {
    try {
        const animals = await Animal.deleteMany();
        res.json(animals);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
}

const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
};

const getSpecificAnimal = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        res.json(animal);
    } catch (err) {
        errorHandler(err, req, res, next);
    }
};

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ message: err.message });
};

module.exports = { createAnimal, editAnimal, editAllAnimals, deleteAnimal, getAllAnimals, getSpecificAnimal };
