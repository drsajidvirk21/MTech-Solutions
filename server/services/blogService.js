const { pool } = require('../db');

const getAll = async () => {
  const [rows] = await pool.query('SELECT id, title, excerpt, category, author, published_at, read_time FROM blog_posts WHERE is_published = TRUE ORDER BY published_at DESC');
  return rows;
};

const getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [id]);
  return rows[0] || null;
};

const create = async (data) => {
  const { title, excerpt, content, category, author, read_time } = data;
  const [result] = await pool.query(
    'INSERT INTO blog_posts (title, excerpt, content, category, author, read_time, is_published) VALUES (?, ?, ?, ?, ?, ?, TRUE)',
    [title, excerpt, content, category, author, read_time]
  );
  return result.insertId;
};

const update = async (id, data) => {
  const fields = Object.keys(data).filter(k => k !== 'id').map(k => `${k} = ?`).join(', ');
  const values = Object.keys(data).filter(k => k !== 'id').map(k => data[k]);
  const [result] = await pool.query(`UPDATE blog_posts SET ${fields} WHERE id = ?`, [...values, id]);
  return result.affectedRows > 0;
};

const deletePost = async (id) => {
  const [result] = await pool.query('DELETE FROM blog_posts WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = { getAll, getById, create, update, delete: deletePost };