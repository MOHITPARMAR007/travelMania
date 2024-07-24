const express = require('express');
const router = express.Router();
const { handleEmergency } = require('../controllers/emergency.controller');

router.post('/', handleEmergency);

module.exports = router;
