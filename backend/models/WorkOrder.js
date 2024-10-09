// models/WorkOrder.js
const mongoose = require('mongoose');

function generateWorkOrderNumber() {
  const baseNumber = Math.floor(Math.random() * 1_000_000) + 1_000_000;
  return '1' + baseNumber.toString().slice(1);
}

const workOrderSchema = new mongoose.Schema({
  workOrderNumber: {
    type: String,
    unique: true,
    default: generateWorkOrderNumber,
    required: true
  },
  workOrderClock: {
    type: String,
    enum: ['new', 'started'],
    default: 'new',
    required: true
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
      required: true
    }
  ]
});

module.exports = mongoose.model('WorkOrder', workOrderSchema);
