const TourGuide = require('../models/TourGuide');

exports.createTourGuide = async (req, res) => {
  try {
    const { name, email, city, state, contactNumber, age, gender } = req.body;
    const profilePic = req.file ? req.file.path : '';

    const newTourGuide = new TourGuide({
      name,
      email,
      city,
      state,
      contactNumber,
      age,
      gender,
      profilePic
    });

    await newTourGuide.save();

    res.status(201).json(newTourGuide);
  } catch (error) {
    console.error('Error creating tour guide:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

/**
 * Retrieves all tour guides from the database and sends a JSON response with the data.
//  * @param {Object} req - The request object.
//  * @param {Object} res - The response object.
 */
exports.getTourGuides = async (req, res) => {
  try {
    const tourGuides = await TourGuide.find();
    res.status(200).json(tourGuides);
  } catch (error) {
    console.error('Error fetching tour guides:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
