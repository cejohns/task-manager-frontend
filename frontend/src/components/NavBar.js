import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/workorders">Work Orders</Link></li>
        <li><Link to="/user/1">User Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
