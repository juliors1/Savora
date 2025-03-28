const express = require('express');
const { getRandomRecipe, saveRecipe, rateRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/random', getRandomRecipe);
router.post('/save', authMiddleware, saveRecipe);
router.post('/rate', authMiddleware, rateRecipe);

module.exports = router;