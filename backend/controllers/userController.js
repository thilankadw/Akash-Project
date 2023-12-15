const User = require("../models/userModel");
const { createAccessToken, createRefreshToken } = require("../utils/secretToken");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res) => {

  try {

    const { firstname, lastname, email, contactNumber, address, password, userrole } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    const user = await User.create({ firstname, lastname, email, contactNumber, address, password, userrole});

    if (!user) {
      return res.status(400).json({ message: "Registration Uis not sucess.", success: false });
    }

    if(user){
      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user);

      res
      .status(201)
      .json({ message: "User signed in successfully", success: true, accessToken: accessToken, refreshToken: refreshToken, userId: user._id});
    }

  }catch (error) {

    console.error(error);
    res.status(500).json({ message: "An error occurred during registration.", success: false });

  }

};

module.exports.Login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if(!email || !password ){
      return res.status(400).json({message:'All fields are required', success: false})
    }

    const user = await User.findOne({ email });

    if(!user){
      return res.status(400).json({message:'User Not Found!!!', success: false })  
    }

    const auth = await bcrypt.compare(req.body.password, user.password)

    if (!auth) {
      return res.status(400).json({message:'Error in auth', success: false }) 
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, refreshToken: refreshToken, accessToken: accessToken, userId: user._id });

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: 'An error occurred during login.', success: false });

  }
};

module.exports.RefreshAccessToken = async (req, res) => {

  try {

    const { refreshToken } = req.body;

    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);

    const newAccessToken = createAccessToken(decodedToken.user);

    res.json({ accessToken: newAccessToken });

  } catch (error) {

    console.error("Error refreshing token:", error);
    res.status(401).json({ message: "Token refresh failed", success: fail });

  }
};