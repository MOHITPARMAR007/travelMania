const userModel = require("../models/user.model");
const nodemailer = require("nodemailer");
const { body, validationResult } = require('express-validator');
const handleEmergency = async (req, res) => {
try{
  const { user } = req.body;
  const {firstName,email} = user.data;
  console.log(firstName,email);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., Gmail, Outlook, etc.
    auth: {
      user: "sr982729@gmail.com",
      pass: "lgyn tyrr krzk wkop",
    },
  });

  // Email content
  const mailOptions = {
    from: "your_email@example.com",
    to: "mohitparmar928@gmail.com",
    subject: "Emergency User Information",
    html: `<p>User Details:</p><p>Name: ${firstName}</p><p>Email: ${email}</p>`,
  };

  // Send email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
}catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
}
};

module.exports = {
  handleEmergency,
};
