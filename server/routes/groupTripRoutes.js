const express = require('express');
const router = express.Router();
const groupTripController = require("../controllers/groupTripController");

// POST request to create a new group trip
router.post('/grouptrips', groupTripController.createGroupTrip);
// GET request to get all group trips
router.get('/grouptrips', groupTripController.getGroupTrips);
module.exports = router;