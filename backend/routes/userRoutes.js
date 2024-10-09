// routes/userRoutes.js
const express = require('express');
const { getUser, logIntoTask, completeTask } = require('../controllers/userController');

const router = express.Router();

router.get('/:userId', getUser);
router.put('/:userId/tasks/:taskId/log', logIntoTask);
router.put('/:userId/tasks/:taskId/complete', completeTask);

module.exports = router;
