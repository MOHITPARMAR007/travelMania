const express = require("express");
const { login, register } = require("../controllers/user.controller");
const multer  = require('multer')

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage });

router.post("/login", login);
// router.post("/register", register);
router.post("/register", upload.single('file'),register);

module.exports = router;