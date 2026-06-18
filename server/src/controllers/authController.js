const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// ==================== Register User ====================
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        message:
          "Please provide all fields",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long",
      });
    }

    if (
      role !== "Student" &&
      role !== "Admin"
    ) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    // Check if user already exists
    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // Create User
    const user = await User.create({
      name,
      email,
      password:
        hashedPassword,
      role,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token:
        generateToken(user._id),
    });
  } catch (error) {
    console.error(
      "Register Error:",
      error
    );

    res.status(500).json({
      message:
        "Server Error During Registration",
    });
  }
};

// ==================== Login User ====================
const loginUser = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    // Validation
    if (
      !email ||
      !password
    ) {
      return res.status(400).json({
        message:
          "Please provide email and password",
      });
    }

    // Find User
    const user =
      await User.findOne({
        email,
      });

    if (
      !user ||
      !(await bcrypt.compare(
        password,
        user.password
      ))
    ) {
      return res.status(401).json({
        message:
          "Invalid Email or Password",
      });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token:
        generateToken(user._id),
    });
  } catch (error) {
    console.error(
      "Login Error:",
      error
    );

    res.status(500).json({
      message:
        "Server Error During Login",
    });
  }
};

// ==================== Get Profile ====================
const getProfile = async (
  req,
  res
) => {
  try {
    res.status(200).json(
      req.user
    );
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch profile",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};