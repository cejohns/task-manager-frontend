// middleware/authMiddleware.js
const jwt = require('jsonwebtoken'); // Assuming you are using JWT for auth
const User = require('../models/User');

// Middleware to check if the user has the required role
const roleCheck = (roles) => (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; // Assuming the token is sent as a Bearer token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;

  User.findById(req.user.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found' });
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    })
    .catch(err => res.status(500).json({ message: 'Server error' }));
};

module.exports = { roleCheck };
