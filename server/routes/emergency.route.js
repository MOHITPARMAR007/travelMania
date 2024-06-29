const express = require("express");
const { handleEmergency } = require("../controllers/emergency.controller");

const router = express.Router();


router.post("/", handleEmergency)

module.exports = router;