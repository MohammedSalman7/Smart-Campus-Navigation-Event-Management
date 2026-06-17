const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEvents,
  getEventById,
  registerEvent,
  myEvents,
  cancelRegistration,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

// Admin Only - Create Event
router.post(
  "/",
  protect,
  admin,
  createEvent
);

// Public - Get All Events
router.get("/", getEvents);

// Student - My Registered Events
router.get(
  "/my-events",
  protect,
  myEvents
);

// Student - Register for Event
router.post(
  "/:id/register",
  protect,
  registerEvent
);

// Student - Cancel Registration
router.delete(
  "/:id/register",
  protect,
  cancelRegistration
);

// Admin - Update Event
router.put(
  "/:id",
  protect,
  admin,
  updateEvent
);

router.delete(
  "/:id",
  protect,
  admin,
  deleteEvent
);

// Get Single Event

router.get(
  "/:id",
  getEventById
);

module.exports = router;