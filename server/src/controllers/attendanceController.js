const Attendance = require("../models/Attendance");

// Mark Attendance
const markAttendance = async (req, res) => {
  try {
    const { student, event, status } =
      req.body;

    const attendance =
      await Attendance.create({
        student,
        event,
        status,
      });

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Attendance
const getAttendance = async (
  req,
  res
) => {
  try {
    const attendance =
      await Attendance.find()
        .populate(
          "student",
          "name email"
        )
        .populate(
          "event",
          "title venue"
        );

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Student Attendance History
const getStudentAttendance =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.find({
          student: req.params.id,
        }).populate(
          "event",
          "title venue"
        );

      res.json(attendance);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
  markAttendance,
  getAttendance,
  getStudentAttendance,
};