// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  tasksLoggedInTo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  tasksCompleted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  pastTasksCompleted: [
    {
      task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      },
      dateCompleted: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
