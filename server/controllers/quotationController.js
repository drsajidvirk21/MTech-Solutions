const quotationService = require('../services/quotationService');
const { pool } = require('../db');

const getAllQuotations = async (req, res) => {
  try {
    const quotations = await quotationService.getAll(req.user.id);
    res.json(quotations);
  } catch (error) {
    console.error('Error fetching quotations:', error.message);
    res.status(500).json({ error: 'Failed to fetch quotations' });
  }
};

const createQuotation = async (req, res) => {
  try {
    const quotationData = {
      ...req.body,
      client_id: req.user.id
    };
    const quotationId = await quotationService.create(quotationData);
    res.status(201).json({ id: quotationId, message: 'Quotation created successfully' });
  } catch (error) {
    console.error('Error creating quotation:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const getQuotationById = async (req, res) => {
  try {
    const quotation = await quotationService.getById(req.params.id, req.user.id);
    if (!quotation) {
      return res.status(404).json({ error: 'Quotation not found' });
    }
    res.json(quotation);
  } catch (error) {
    console.error('Error fetching quotation:', error.message);
    res.status(500).json({ error: 'Failed to fetch quotation' });
  }
};

const updateQuotation = async (req, res) => {
  try {
    const updated = await quotationService.update(req.params.id, req.body, req.user.id);
    if (!updated) {
      return res.status(404).json({ error: 'Quotation not found' });
    }
    res.json({ message: 'Quotation updated successfully' });
  } catch (error) {
    console.error('Error updating quotation:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const deleteQuotation = async (req, res) => {
  try {
    const deleted = await quotationService.delete(req.params.id, req.user.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Quotation not found' });
    }
    res.json({ message: 'Quotation deleted successfully' });
  } catch (error) {
    console.error('Error deleting quotation:', error.message);
    res.status(500).json({ error: 'Failed to delete quotation' });
  }
};

const estimateQuote = async (req, res) => {
  try {
    const { service_id, requirements } = req.body;
    const [services] = await pool.query('SELECT * FROM services WHERE id = ?', [service_id]);
    if (services.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    const basePrice = 1500;
    const requirementMultiplier = Math.max(1, requirements.split(' ').length / 50);
    const estimatedCost = Math.round(basePrice * requirementMultiplier);
    res.json({
      service_id,
      estimated_cost: `$${estimatedCost} - $${estimatedCost * 2}`,
      note: 'Final pricing depends on detailed requirements.'
    });
  } catch (error) {
    console.error('Estimation error:', error.message);
    res.status(500).json({ error: 'Failed to generate estimate' });
  }
};

module.exports = {
  getAllQuotations,
  createQuotation,
  getQuotationById,
  updateQuotation,
  deleteQuotation,
  estimateQuote
};