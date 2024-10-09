// routes/workOrderRoutes.js
const express = require('express');
const { createWorkOrder, getWorkOrders, updateWorkOrder, deleteWorkOrder } = require('../controllers/workOrderController');

const router = express.Router();

router.post('/', createWorkOrder);
router.get('/', getWorkOrders);
router.put('/:workOrderId', updateWorkOrder);
router.delete('/:workOrderId', deleteWorkOrder);

module.exports = router;
