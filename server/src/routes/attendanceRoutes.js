const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAttendance,
  getStudentAttendance,
} = require(
  "../controllers/attendanceController"
);

const {
  protect,
  admin,
} = require(
  "../middleware/authMiddleware"
);

// Admin only
router.post(
  "/",
  protect,
  admin,
  markAttendance
);

router.get(
  "/",
  protect,
  admin,
  getAttendance
);

// Student history
router.get(
  "/student/:id",
  protect,
  getStudentAttendance
);

module.exports = router;