// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userId = 1; // Replace with actual user ID or get from a global state if necessary

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <ul>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/workorders">Work Orders</Link></li>
        <li><Link to={`/user/${userId}`}>User Profile</Link></li> {/* Update userId dynamically if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
