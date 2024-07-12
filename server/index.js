const express = require("express");
const connectToDB = require("./config/db.config");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const userRoutes = require("./routes/user.route");
const emergencyRoute = require("./routes/emergency.route");
const groupTripRoutes = require("./routes/groupTripRoutes");
const tourGuideRoutes = require("./routes/tourGuideRoutes");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/emergency", emergencyRoute);
app.use("/api", groupTripRoutes);
app.use("/api/tourguides", tourGuideRoutes);
app.use("/", userRoutes);

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
