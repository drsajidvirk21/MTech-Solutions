const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotationController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Public estimation endpoint (no auth required)
router.post('/estimate', quotationController.estimateQuote);

// Protected routes
router.get('/', authenticateToken, quotationController.getAllQuotations);
router.post('/', authenticateToken, quotationController.createQuotation);
router.get('/:id', authenticateToken, quotationController.getQuotationById);
router.put('/:id', authenticateToken, quotationController.updateQuotation);
router.delete('/:id', authenticateToken, quotationController.deleteQuotation);

module.exports = router;