const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
  try {
    const { name, assignedTo, createdBy } = req.body;
    const newTask = new Task({ name, assignedTo, createdBy });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create task' });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo createdBy');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch tasks' });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Unable to update task' });
  }
};

// Complete a task
const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.status = 'complete';
      task.history.push({ action: 'completed', user: req.user.id });
      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Unable to complete task' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete task' });
  }
};

module.exports = { createTask, getTasks, updateTask, completeTask, deleteTask };
