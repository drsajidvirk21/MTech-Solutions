const db = require('../config/db');

const getAll = async () => {
  const [services] = await db.pool.query('SELECT * FROM services');
  return services;
};

const create = async (serviceData) => {
  const [result] = await db.pool.query(
    'INSERT INTO services SET ?',
    { ...serviceData }
  );
  return result.insertId;
};

const deleteService = async (id) => {
  await db.pool.query('DELETE FROM services WHERE id = ?', [id]);
};

module.exports = { getAll, create, deleteService };
