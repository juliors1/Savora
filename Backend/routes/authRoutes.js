const express = require('express');
const { register, login, getUserProfile } = require('../controllers/auth');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get user profile (protected route)
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;