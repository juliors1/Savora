const express = require('express'); 
const { 
  getRandomRecipe, 
  saveRecipe, 
  rateRecipe, 
  searchRecipes, 
  getExploreRecipes, 
  shareRecipe,
  submitRecipe // Add this
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

module.exports = router;