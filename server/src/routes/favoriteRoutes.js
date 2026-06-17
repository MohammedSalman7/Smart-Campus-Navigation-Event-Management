const express = require("express");
const router = express.Router();

const {
  addFavorite,
  getFavorites,
  removeFavorite,
} = require(
  "../controllers/favoriteController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

// Get all favorite buildings
router.get(
  "/",
  protect,
  getFavorites
);

// Add favorite building
router.post(
  "/:id",
  protect,
  addFavorite
);

router.delete(
  "/:id",
  protect,
  removeFavorite
);

module.exports = router;