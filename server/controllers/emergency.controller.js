const nodemailer = require("nodemailer");

const handleEmergency = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body
    const { user, location } = req.body;

    if (!user || !location) {
      return res.status(400).json({ message: "User data and location data are required" });
    }

    const { firstName, email } = user;
    const { latitude, longitude } = location;
    console.log(firstName, email, latitude, longitude);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mohitparmar928@gmail.com",
      subject: "Emergency User Information",
      html: `<p>User Details:</p><p>Name: ${firstName}</p><p>Email: ${email}</p><p>Latitude: ${latitude}</p><p>Longitude: ${longitude}</p>`,
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  handleEmergency,
};
