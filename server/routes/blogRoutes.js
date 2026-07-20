const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

// Public routes
router.get('/', blogController.getAllPosts);
router.get('/:id', blogController.getPostById);

// Admin-only routes
router.post('/', authenticateToken, authorizeRole(['admin']), blogController.createPost);
router.put('/:id', authenticateToken, authorizeRole(['admin']), blogController.updatePost);
router.delete('/:id', authenticateToken, authorizeRole(['admin']), blogController.deletePost);

module.exports = router;