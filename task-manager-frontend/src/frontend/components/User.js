// components/User.js
import React, { useEffect, useState } from 'react';
import { getUser, logIntoTask, completeTask } from '../api';

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(userId);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  const handleLogIntoTask = async (taskId) => {
    await logIntoTask(userId, taskId);
    // Optionally, refetch user data
  };

  const handleCompleteTask = async (taskId) => {
    await completeTask(userId, taskId);
    // Optionally, refetch user data
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>
      <h3>Logged into Tasks</h3>
      <ul>
        {user.tasksLoggedInTo.map(task => (
          <li key={task._id}>
            {task.taskName} 
            <button onClick={() => handleCompleteTask(task._id)}>Complete Task</button>
          </li>
        ))}
      </ul>
      <h3>Past Tasks Completed</h3>
      <ul>
        {user.pastTasksCompleted.map(pastTask => (
          <li key={pastTask.task._id}>
            {pastTask.task.taskName} - Completed on {new Date(pastTask.dateCompleted).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
