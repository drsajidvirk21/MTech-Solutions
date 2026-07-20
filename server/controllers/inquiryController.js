const inquiryService = require('../services/inquiryService');

exports.submitInquiry = async (req, res) => {
  try {
    const inquiry = await inquiryService.create(req.body);
    res.status(201).json(inquiry);
  } catch (error) {
    console.error('Inquiry submission error:', error.message);
    res.status(400).json({ error: 'Validation failed' });
  }
};

const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryService.findAll();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
};

exports.getAllInquiries = getAllInquiries;
