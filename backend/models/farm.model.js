const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Farm', farmSchema);