const express = require("express");
const {
  getRandomRecipe,
  saveRecipe,
  rateRecipe,
  searchRecipes,
  getExploreRecipes,
  shareRecipe,
} = require("../controllers/recipes");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/random", getRandomRecipe);
router.post("/save", authMiddleware, saveRecipe);
router.post("/rate", authMiddleware, rateRecipe);
router.get("/search", searchRecipes); // New route for searching recipes
router.get("/explore", getExploreRecipes); // New route for explore page
router.post("/share", authMiddleware, shareRecipe); // New route for sharing recipes

module.exports = router;
