const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  healthStatus: { type: String, enum: ['Healthy', 'Sick', 'Infected'], required: true },
  vaccinationStatus: { type: String, enum: ['Fully vaccinated', 'Partially vaccinated', 'Unvaccinated'], required: true },
  vaccinationType: { type: String, enum: ['Influenza', 'Rabies', 'Parvovirus'], required: true },
  section: { type: String, required: true },
});

module.exports = mongoose.model('Animal', animalSchema);