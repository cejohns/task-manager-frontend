import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // adjust the URL based on your backend

// User Endpoints
export const getUser = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const logIntoTask = (userId, taskId) => axios.put(`${API_URL}/users/${userId}/tasks/${taskId}/log`);
export const completeTask = (userId, taskId) => axios.put(`${API_URL}/users/${userId}/tasks/${taskId}/complete`);

// Task Endpoints
export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (taskData) => axios.post(`${API_URL}/tasks`, taskData);
export const deleteTask = (taskId) => axios.delete(`${API_URL}/tasks/${taskId}`);

// Work Order Endpoints
export const getWorkOrders = () => axios.get(`${API_URL}/workorders`);
export const createWorkOrder = (workOrderData) => axios.post(`${API_URL}/workorders`, workOrderData);
export const deleteWorkOrder = (workOrderId) => axios.delete(`${API_URL}/workorders/${workOrderId}`);
