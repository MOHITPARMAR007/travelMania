const mongoose = require('mongoose');

const groupTripSchema = new mongoose.Schema({
  tripPostBy: String,
  description: String,
  destination: String,
  ContactNumber: String,
  startDate: Date,
  endDate: Date,
  groupMembers: [{
    userId: String,
    details: {
      numberOfMembers: Number,
      NumberOfMales: Number,
      NumberOfFemales: Number,
    },
    personalId: String,
  }],
  createdBy: String,
});

module.exports = mongoose.model('GroupTrip', groupTripSchema);