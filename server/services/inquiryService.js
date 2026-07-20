const db = require('../config/db');

const create = async (inquiryData) => {
  const [result] = await db.pool.query('INSERT INTO inquiries SET ?', {
    ...inquiryData
  });
  return result.insertId;
};

const findAll = async () => {
  const [rows] = await db.pool.query('SELECT * FROM inquiries ORDER BY created_at DESC');
  return rows;
};

exports.create = create;
exports.findAll = findAll;
