// controllers/userController.js
const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('tasksLoggedInTo tasksCompleted');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Define logIntoTask, completeTask, etc.
