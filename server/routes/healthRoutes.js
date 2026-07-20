const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'online';
    services: [
      'Project Tracking',
      'AI Assistant API',
      'Booking System'
    ]
  });
});

module.exports = router;
