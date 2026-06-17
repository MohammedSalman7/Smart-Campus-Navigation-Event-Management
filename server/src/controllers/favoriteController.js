const User = require("../models/User");
const Building = require("../models/Building");

// Add Favorite Building
const addFavorite = async (req, res) => {
  try {
    const building = await Building.findById(
      req.params.id
    );

    if (!building) {
      return res.status(404).json({
        message: "Building not found",
      });
    }

    if (
      req.user.favoriteBuildings.includes(
        building._id
      )
    ) {
      return res.status(400).json({
        message:
          "Building already in favorites",
      });
    }

    req.user.favoriteBuildings.push(
      building._id
    );

    await req.user.save();

    res.json({
      message:
        "Building added to favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Favorite Buildings
const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).populate("favoriteBuildings");

    res.json(user.favoriteBuildings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeFavorite = async (req, res) => {
  try {
    req.user.favoriteBuildings =
      req.user.favoriteBuildings.filter(
        (buildingId) =>
          buildingId.toString() !==
          req.params.id
      );

    await req.user.save();

    res.json({
      message:
        "Building removed from favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
};