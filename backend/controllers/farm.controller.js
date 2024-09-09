const Farm = require("../models/farm.model")
const getAllFarms = async (req, res) => {
    try {
        const farms = await Farm.find();
        res.json(farms);
    } catch (err) {
        console.log(err)
        //errorHandler(err, req, res, next);
    }
};


module.exports = { getAllFarms };
