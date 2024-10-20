import React from 'react';

const TaskList = ({ tasks, user, handleCompleteTask, handleEditTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.name}</h3>
          <p>Status: {task.status}</p>

          {/* If user is an Administrator, they can complete all tasks */}
          {user.role === 'Administrator' && (
            <button onClick={() => handleCompleteTask(task._id)}>Complete Task</button>
          )}

          {/* If user is QA or Special, they can complete tasks assigned to them */}
          {(user.role === 'QA' || user.role === 'Special') && task.assignedTo === user._id && (
            <button onClick={() => handleCompleteTask(task._id)}>Complete Task</button>
          )}

          {/* If user is a Technician, they can only edit completed tasks */}
          {user.role === 'Technician' && task.status === 'complete' && (
            <button onClick={() => handleEditTask(task._id)}>Edit Task</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
