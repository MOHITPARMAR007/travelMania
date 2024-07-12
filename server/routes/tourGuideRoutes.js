const express = require('express');
const multer = require('multer');
const { createTourGuide, getTourGuides } = require('../controllers/tourGuideController');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/uploads', upload.single('profilePic'), createTourGuide);
router.get('/uploads', getTourGuides);

module.exports = router;
