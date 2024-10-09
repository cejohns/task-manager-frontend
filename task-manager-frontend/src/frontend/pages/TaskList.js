// pages/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';
import Task from '../components/Task';

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <Task key={task._id} task={task} userId={userId} />
      ))}
    </div>
  );
};

export default TaskList;
