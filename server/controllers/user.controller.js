const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const userModel = require("../models/user.model")


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }

    const user = await userModel.findOne({ email }).select("+password");
    console.log("hjh"+user);

    // compare password after bcrypting
    if (!user || !user.password) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const register = async (req, res) => {
  const {originalname} = req.file
  const { firstName, lastName,  email, password, file } = req.body;
  try {
    if (!firstName || !lastName || !email || !password || !originalname) {
      return res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }
    
    var validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid email",
      });
    }
    const result = await userModel.create({
      firstName,
      lastName,
      email,
      password,
      picture:originalname
    });
    // console.log("hhhhhh"+result);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists",
      });
    }
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  login,
  register,
};
