const appointmentService = require('../services/appointmentService');

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentService.getAll(req.user.id);
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error.message);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointmentData = {
      ...req.body,
      client_id: req.user.id
    };
    const appointmentId = await appointmentService.create(appointmentData);
    res.status(201).json({ id: appointmentId, message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointmentService.getById(req.params.id, req.user.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error.message);
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const updated = await appointmentService.update(req.params.id, req.body, req.user.id);
    if (!updated) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json({ message: 'Appointment updated successfully' });
  } catch (error) {
    console.error('Error updating appointment:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const deleted = await appointmentService.delete(req.params.id, req.user.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error.message);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};

module.exports = {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};
"