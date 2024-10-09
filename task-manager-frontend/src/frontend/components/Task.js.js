// components/Task.js
import React from 'react';
import { logIntoTask, completeTask } from '../api';

const Task = ({ task, userId }) => {
  
  const handleLogIntoTask = async () => {
    await logIntoTask(userId, task._id);
    alert('Logged into task successfully.');
  };

  const handleCompleteTask = async () => {
    await completeTask(userId, task._id);
    alert('Task completed successfully.');
  };

  return (
    <div className="task">
      <h4>{task.taskName}</h4>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
      <button onClick={handleLogIntoTask}>Log into Task</button>
      {task.status === 'incomplete' && <button onClick={handleCompleteTask}>Complete Task</button>}
    </div>
  );
};

export default Task;
