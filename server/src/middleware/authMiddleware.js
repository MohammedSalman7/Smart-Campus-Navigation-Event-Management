const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect Routes
const protect = async (req, res, next) => {
  let token;

  try {
    // Check if Authorization header exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Debug Logs
      console.log("=================================");
      console.log("Received Token:", token);
      console.log(
        "JWT Secret:",
        process.env.JWT_SECRET
      );
      console.log("=================================");

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      console.log("Decoded Token:", decoded);

      // Get user without password
      req.user = await User.findById(
        decoded.id
      ).select("-password");

      if (!req.user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      next();
    } else {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }
  } catch (error) {
    console.log(
      "JWT Error:",
      error.message
    );

    return res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

// Admin Only Routes
const admin = (req, res, next) => {
  if (
    req.user &&
    req.user.role === "Admin"
  ) {
    next();
  } else {
    return res.status(403).json({
      message: "Admin access only",
    });
  }
};

module.exports = {
  protect,
  admin,
};