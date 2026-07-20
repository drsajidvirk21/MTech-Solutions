const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Public Routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Protected Routes
router.get('/me', authenticateToken, (req, res) => {
  res.json(req.user); // Returns authenticated user profile
});

router.get('/admins', authenticateToken, (req, res) => {
  // Only allow admins
  res.json({ message: 'Restricted area' });
});

module.exports = router;