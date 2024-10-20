// controllers/userController.js
const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, firstName, lastName, password, role } = req.body;
    const newUser = new User({ username, firstName, lastName, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user' });
  }
};

// Get all users (Admin or other roles with access)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users' });
  }
};

module.exports = { createUser, getUsers };
