const express = require("express");
const connectToDB = require("./config/db.config");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const userRoutes = require("./routes/user.route");
const emergencyRoute = require("./routes/emergency.route")
const groupTripRoutes = require("./routes/groupTripRoutes"); 

const app = express();
connectToDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const PORT = process.env.PORT || 5000;

app.use("/emergency", emergencyRoute);
app.use("/api", groupTripRoutes);

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
