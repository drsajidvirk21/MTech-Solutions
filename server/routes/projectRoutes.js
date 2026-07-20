const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

// Protected route for projects (only logged-in users can access)
router.get('/', authenticateToken, projectController.getAllProjects);

// Admin-only route
router.post('/', authenticateToken, authorizeRole(['admin']), projectController.createProject);

module.exports = router;