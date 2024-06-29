const express = require('express');
const router = express.Router();
const groupTripController = require("../controllers/groupTripController");

// POST request to create a new group trip
router.post('/grouptrips', groupTripController.createGroupTrip);

module.exports = router;