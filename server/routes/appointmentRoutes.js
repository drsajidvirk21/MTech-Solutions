const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Appointment routes (protected)
router.get('/', authenticateToken, appointmentController.getAllAppointments);
router.post('/', authenticateToken, appointmentController.createAppointment);
router.get('/:id', authenticateToken, appointmentController.getAppointmentById);
router.put('/:id', authenticateToken, appointmentController.updateAppointment);
router.delete('/:id', authenticateToken, appointmentController.deleteAppointment);

module.exports = router;