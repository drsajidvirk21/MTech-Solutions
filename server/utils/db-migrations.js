const db = require('../config/db');
const { Pool } = require('mysql2');

const runMigrations = async () => {
  try {
    const connection = await db.pool.getConnection();
    // Example migration: Create projects table
    await connection.query('CREATE TABLE IF NOT EXISTS projects (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT)');
    connection.release();
    console.log('✅ Database migrations completed successfully');
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
  }
};

module.exports = { runMigrations };
