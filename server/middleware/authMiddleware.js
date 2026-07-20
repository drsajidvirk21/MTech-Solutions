const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_change_in_production';

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Fetch user info from DB to ensure user still exists and is active
    const [users] = await pool.query('SELECT id, full_name, email, role_id FROM users WHERE id =? AND is_active = TRUE', [decoded.userId]);
    
    if (users.length === 0) {
      return res.status(401).json({ error: 'User not found or inactive' });
    }

    req.user = {...users[0], userId: users[0].id };
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};

const authorizeRole = (roleNames) => {
  return async (req, res, next) => {
    try {
      const [roles] = await pool.query('SELECT name FROM roles WHERE id =?', [req.user.role_id]);
      const userRole = roles[0]?.name;

      if (!roleNames.includes(userRole)) {
        return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
      }
      next();
    } catch (error) {
      res.status(500).json({ error: 'Authorization failed' });
    }
  };
};

module.exports = { authenticateToken, authorizeRole };