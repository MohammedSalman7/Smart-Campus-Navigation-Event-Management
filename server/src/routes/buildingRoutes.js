const express = require("express");
const router = express.Router();

const {
  addBuilding,
  getBuildings,
  searchBuildings,
} = require("../controllers/buildingController");

router.post("/", addBuilding);

router.get("/", getBuildings);

router.get("/search", searchBuildings);

module.exports = router;