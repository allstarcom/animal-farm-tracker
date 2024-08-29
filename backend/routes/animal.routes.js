const express = require('express');
const router = express.Router();
const { createAnimal } = require('../controllers/animal.controller');

router.post('/', createAnimal);

module.exports = router;