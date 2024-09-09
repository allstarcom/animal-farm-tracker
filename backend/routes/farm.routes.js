const express = require('express');
const router = express.Router();
const { getAllFarms } = require('../controllers/farm.controller');

router.get('/getAllFarms', getAllFarms);

module.exports = router;