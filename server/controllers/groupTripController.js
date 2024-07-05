const GroupTrip = require('../models/Group.model');
const { body, validationResult } = require('express-validator');
// Controller function to create a new group trip
const createGroupTrip = async (req, res) => {
    console.log(req.body);
  try {
    const {
      tripPostBy,
      description,
      destination,
      ContactNumber,
      startDate,
      endDate,
      groupMembers,
      createdBy,
    } = req.body;

    // Create new GroupTrip object
    const savedGroupTrip = await GroupTrip.create({
      tripPostBy,
      description,
      destination,
      ContactNumber,
      startDate,
      endDate,
      groupMembers,
      createdBy,
    });

    // Save the new group trip to the database
  

    res.status(201).json(savedGroupTrip);
  } catch (error) {
    console.error('Error creating group trip:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createGroupTrip,
};