const Event = require("../models/Event");
const User = require("../models/User");

// Create Event
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      venue,
      category,
      image,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      venue,
      category,
      image,
      organizer: req.user._id,
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("organizer", "name email");

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Event
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(
      req.params.id
    )
      .populate("organizer", "name email")
      .populate("attendees", "name email");

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Register for Event
const registerEvent = async (req, res) => {
  try {
    const event = await Event.findById(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    if (
      event.attendees.includes(req.user._id)
    ) {
      return res.status(400).json({
        message:
          "Already registered for event",
      });
    }

    event.attendees.push(req.user._id);
    await event.save();

    req.user.registeredEvents.push(
      event._id
    );
    await req.user.save();

    res.json({
      message:
        "Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// My Registered Events
const myEvents = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).populate("registeredEvents");

    res.json(user.registeredEvents);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Cancel Event Registration
const cancelRegistration = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Remove student from attendees
    event.attendees = event.attendees.filter(
      (userId) =>
        userId.toString() !== req.user._id.toString()
    );

    await event.save();

    // Remove event from student's registered events
    req.user.registeredEvents =
      req.user.registeredEvents.filter(
        (eventId) =>
          eventId.toString() !== event._id.toString()
      );

    await req.user.save();

    res.json({
      message:
        "Registration cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    event.title =
      req.body.title || event.title;

    event.description =
      req.body.description ||
      event.description;

    event.date =
      req.body.date || event.date;

    event.venue =
      req.body.venue || event.venue;

    event.category =
      req.body.category ||
      event.category;

    event.image =
      req.body.image || event.image;

    const updatedEvent =
      await event.save();

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    await Event.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  registerEvent,
  myEvents,
  cancelRegistration,
  updateEvent,
  deleteEvent,
};