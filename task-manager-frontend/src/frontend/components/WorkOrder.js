// components/WorkOrder.js
import React from 'react';
import { deleteWorkOrder } from '../api';

const WorkOrder = ({ workOrder, refreshWorkOrders }) => {
  
  const handleDeleteWorkOrder = async () => {
    await deleteWorkOrder(workOrder._id);
    alert('Work order deleted successfully.');
    refreshWorkOrders(); // Call the parent function to refresh the work orders list
  };

  return (
    <div className="work-order">
      <h4>Work Order #{workOrder.workOrderNumber}</h4>
      <p>Status: {workOrder.workOrderClock}</p>
      <ul>
        <h5>Tasks:</h5>
        {workOrder.tasks.map(task => (
          <li key={task._id}>{task.taskName} - Status: {task.status}</li>
        ))}
      </ul>
      <button onClick={handleDeleteWorkOrder}>Delete Work Order</button>
    </div>
  );
};

export default WorkOrder;
