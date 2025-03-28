const Recipe = require('../models/Recipe');
const User = require('../models/User');
const axios = require('axios');
require('dotenv').config();

// Get a random recipe
exports.getRandomRecipe = async (req, res) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
};

// Save a recipe to user profile
exports.saveRecipe = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.savedRecipes.includes(recipeId)) {
      user.savedRecipes.push(recipeId);
      await user.save();
    }

    res.json({ message: 'Recipe saved successfully', savedRecipes: user.savedRecipes });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Rate a recipe
exports.rateRecipe = async (req, res) => {
  try {
    const { recipeId, rating } = req.body;

    if (rating < 1 || rating > 5) return res.status(400).json({ message: 'Rating must be between 1 and 5' });

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    recipe.rating = (recipe.rating + rating) / 2;
    await recipe.save();

    res.json({ message: 'Recipe rated successfully', recipe });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};