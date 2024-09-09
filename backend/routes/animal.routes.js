const express = require('express');
const router = express.Router();
const { createAnimal, getAllAnimals } = require('../controllers/animal.controller');

router.get('/getAllAnimals', getAllAnimals);
router.post('/createAnimal', createAnimal);

module.exports = router;