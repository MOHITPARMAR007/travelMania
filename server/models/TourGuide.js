// models/TourGuide.js (or wherever your models are stored)

const mongoose = require('mongoose');

const TourGuideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  contactNumber: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true }, // Ensure gender is one of these values
  profilePic: { type: String, required: true } // Assuming profilePic will be a URL to the image stored somewhere
});

module.exports = mongoose.model('TourGuide', TourGuideSchema);
