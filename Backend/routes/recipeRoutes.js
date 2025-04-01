const express = require('express'); 
const { 
  getRandomRecipe, 
  saveRecipe, 
  rateRecipe, 
  searchRecipes, 
  getExploreRecipes, 
  shareRecipe,
  submitRecipe, // Add this
  getUserRecipes, updateRecipe, deleteRecipe
} = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/random', getRandomRecipe);
router.post('/save', authMiddleware, saveRecipe);
router.post('/rate', authMiddleware, rateRecipe);
router.get('/search', searchRecipes);
router.get('/explore', getExploreRecipes);
router.post('/share', authMiddleware, shareRecipe);
router.post('/submit', authMiddleware, submitRecipe); // Add this line
router.get('/my-recipes', authMiddleware, getUserRecipes); // Get all user-created recipes
router.put('/:id', authMiddleware, updateRecipe); // Update a recipe
router.delete('/:id', authMiddleware, deleteRecipe); // Delete a recipe

module.exports = router;