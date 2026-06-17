const eventRoutes = require("./routes/eventRoutes");
const express = require("express");
const cors = require("cors");
const attendanceRoutes = require(
  "./routes/attendanceRoutes"
);
const notificationRoutes = require(
  "./routes/notificationRoutes"
);

const authRoutes = require("./routes/authRoutes");
const buildingRoutes = require("./routes/buildingRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Smart Campus Backend Running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/buildings", buildingRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use(
  "/api/attendance",
  attendanceRoutes
);
app.use(
  "/api/notifications",
  notificationRoutes
);

module.exports = app;
