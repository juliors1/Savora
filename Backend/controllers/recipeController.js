// controllers/recipeController.js
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');



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
    console.log("Request received to save recipe."); 

    const { recipeId } = req.body;
    console.log("Recipe ID:", recipeId);

    console.log("User ID from request:", req.user?.id);

    const user = await User.findById(req.user.id);
    console.log("User found:", user);

    if (!user) return res.status(404).json({ message: 'User not found' });

    // Validate if recipeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      return res.status(400).json({ message: 'Invalid recipeId format' });
    }

    const recipeObjectId = new mongoose.Types.ObjectId(recipeId); // Convert only if valid

    if (!user.savedRecipes.includes(recipeObjectId)) {
      user.savedRecipes.push(recipeObjectId);
      await user.save();
      console.log("Recipe saved successfully.");
    } else {
      console.log("Recipe already saved.");
    }

    res.json({ message: 'Recipe saved successfully', savedRecipes: user.savedRecipes });
  } catch (error) {
    console.error("Error in saveRecipe:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
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
      shared: shared || false,
      user: req.user.id // Assign the user ID
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

exports.getUserRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, shared } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid recipe ID format" });
    }

    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // Check if the recipe has a user before calling toString()
    if (!recipe.user || !req.user) {
      return res.status(403).json({ message: "Unauthorized - User field missing" });
    }

    // Ensure only the owner can update the recipe
    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update fields if provided
    if (title) recipe.title = title;
    if (ingredients) recipe.ingredients = ingredients;
    if (instructions) recipe.instructions = instructions;
    if (shared !== undefined) recipe.shared = shared;

    await recipe.save();
    res.json({ message: "Recipe updated successfully", recipe });
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received Recipe ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid recipe ID format" });
    }

    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // Ensure the user deleting the recipe is the owner
    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Use deleteOne instead of remove
    await recipe.deleteOne();

    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};