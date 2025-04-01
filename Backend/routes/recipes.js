const express = require("express");
const {
  getRandomRecipe,
} = require("../controllers/recipes");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/random", getRandomRecipe);


module.exports = router;
