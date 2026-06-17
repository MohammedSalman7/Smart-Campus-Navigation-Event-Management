const express = require("express");
const router = express.Router();

const {
  createNotification,
  getNotifications,
} = require(
  "../controllers/notificationController"
);

const {
  protect,
  admin,
} = require(
  "../middleware/authMiddleware"
);

// Admin creates notification
router.post(
  "/",
  protect,
  admin,
  createNotification
);

// Student gets notifications
router.get(
  "/",
  protect,
  getNotifications
);

module.exports = router;