// controllers/recipeController.js
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

// Add or Update a User's Rating for a Recipe
exports.rateRecipe = async (req, res) => {
  try {
    const { userId, rating } = req.body;

    if (!userId || !rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Invalid rating or user ID.' });
    }

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    // Check if the user has already rated
    const existingRating = recipe.ratings.find(r => r.userId.toString() === userId);
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      recipe.ratings.push({ userId, rating });
    }

    // Recalculate and save the average rating
    recipe.calculateAverageRating();
    await recipe.save();

    res.json({ message: 'Rating updated', averageRating: recipe.averageRating });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Search for Recipes
exports.searchRecipes = async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ message: 'Search query is required' });

  try {
    const recipes = await Recipe.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { ingredients: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get Shared Recipes for Explore Page
exports.getExploreRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ shared: true });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Submit a New Recipe
exports.submitRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, shared } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      shared: shared || false
    });

    await newRecipe.save();
    res.json({ message: 'Recipe submitted successfully!', recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Share a Recipe
exports.shareRecipe = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    // Share the recipe
    recipe.shared = true;
    await recipe.save();

    res.json({ message: 'Recipe shared successfully', recipe });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};