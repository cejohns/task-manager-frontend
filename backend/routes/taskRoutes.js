// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { roleCheck } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

// Administrator can create work orders
router.post('/create-workorder', roleCheck(['Administrator']), createWorkOrder);

// QA, Special, and Administrator can complete tasks
router.post('/complete-task/:taskId', roleCheck(['Administrator', 'QA', 'Special']), completeTask);

// Technicians can only mark tasks as completed
router.post('/edit-task/:taskId', roleCheck(['Technician', 'QA', 'Special']), completeTask);

module.exports = router;
