const serviceService = require('../services/serviceService');

const getAllServices = async (req, res) => {
  try {
    const services = await serviceService.getAll();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};

const createService = async (req, res) => {
  try {
    const newService = await serviceService.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    await serviceService.delete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Deletion failed' });
  }
};

module.exports = { getAllServices, createService, deleteService };
