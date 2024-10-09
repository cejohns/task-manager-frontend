// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// Import and use routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const workOrderRoutes = require('./routes/workOrderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/workorders', workOrderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
