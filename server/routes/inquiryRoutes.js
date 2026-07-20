const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

// Route to submit an inquiry
router.post('/', inquiryController.submitInquiry);

// Route to get all inquiries (admin view)
router.get('/', inquiryController.getAllInquiries);

module.exports = router;
