const { pool } = require('../db');

const getAll = async (clientId) => {
  const [rows] = await pool.query('SELECT * FROM appointments WHERE client_id = ?', [clientId]);
  return rows;
};

const create = async (appointmentData) => {
  const { service_id, appointment_date, status = 'scheduled', notes, client_id } = appointmentData;
  const [result] = await pool.query(
    'INSERT INTO appointments (service_id, appointment_date, status, notes, client_id) VALUES (?, ?, ?, ?, ?)',
    [service_id, appointment_date, status, notes, client_id]
  );
  return result.insertId;
};

const getById = async (id, clientId) => {
  const [rows] = await pool.query('SELECT * FROM appointments WHERE id = ? AND client_id = ?', [id, clientId]);
  return rows[0] || null;
};

const update = async (id, updates, clientId) => {
  const fields = Object.keys(updates)
    .filter(key => key !== 'id' && key !== 'client_id')
    .map(key => `${key} = ?`)
    .join(', ');
  
  const values = Object.keys(updates)
    .filter(key => key !== 'id' && key !== 'client_id')
    .map(key => updates[key]);
  
  const query = `UPDATE appointments SET ${fields} WHERE id = ? AND client_id = ?`;
  const [result] = await pool.query(query, [...values, id, clientId]);
  return result.affectedRows > 0;
};

const remove = async (id, clientId) => {
  const [result] = await pool.query('DELETE FROM appointments WHERE id = ? AND client_id = ?', [id, clientId]);
  return result.affectedRows > 0;
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  delete: remove
};
"