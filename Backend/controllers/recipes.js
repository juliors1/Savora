const Recipe = require("../models/Recipe");
const axios = require("axios");
require("dotenv").config();


// Get a random recipe
exports.getRandomRecipe = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
};
