// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import UserProfile from './pages/UserProfile';
import WorkOrderList from './pages/WorkOrderList';
import Navbar from './components/NavBar'; // Make sure this matches the correct file name and casing

const App = () => {
  // You can add an isAuthenticated state to control access to protected routes
  const isAuthenticated = false; // Change this based on login status

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/tasks"
          element={isAuthenticated ? <TaskList /> : <Navigate to="/" />}
        />
        <Route
          path="/workorders"
          element={isAuthenticated ? <WorkOrderList /> : <Navigate to="/" />}
        />
        <Route
          path="/user/:userId"
          element={isAuthenticated ? <UserProfile /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
