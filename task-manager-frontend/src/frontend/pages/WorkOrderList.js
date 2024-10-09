// pages/WorkOrderList.js
import React, { useEffect, useState } from 'react';
import { getWorkOrders, createWorkOrder, deleteWorkOrder } from '../api';

const WorkOrderList = () => {
  const [workOrders, setWorkOrders] = useState([]);

  useEffect(() => {
    const fetchWorkOrders = async () => {
      const response = await getWorkOrders();
      setWorkOrders(response.data);
    };
    fetchWorkOrders();
  }, []);

  const handleCreateWorkOrder = async () => {
    await createWorkOrder({ /* work order data */ });
    // Optionally, refetch work orders
  };

  const handleDeleteWorkOrder = async (workOrderId) => {
    await deleteWorkOrder(workOrderId);
    // Optionally, refetch work orders
  };

  return (
    <div>
      <h2>Work Orders</h2>
      <button onClick={handleCreateWorkOrder}>Create Work Order</button>
      <ul>
        {workOrders.map(order => (
          <li key={order._id}>
            Work Order #{order.workOrderNumber} - {order.workOrderClock}
            <button onClick={() => handleDeleteWorkOrder(order._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkOrderList;
