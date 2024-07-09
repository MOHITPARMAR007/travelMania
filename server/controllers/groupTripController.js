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
// Controller function to get all group trips
/**
 * Retrieves all group trips from the database and sends a JSON response with the group trips.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getGroupTrips = async (req, res) => {
  try {
      const groupTrips = await GroupTrip.find({});
      res.status(200).json(groupTrips);
  } catch (error) {
      console.error('Error fetching group trips:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createGroupTrip,
  getGroupTrips,
};