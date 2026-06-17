const Building = require("../models/Building");

// Add Building
const addBuilding = async (req, res) => {
  try {
    const building = await Building.create(req.body);

    res.status(201).json(building);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Buildings
const getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();

    res.json(buildings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search Buildings
const searchBuildings = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const buildings = await Building.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.json(buildings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBuilding,
  getBuildings,
  searchBuildings,
};