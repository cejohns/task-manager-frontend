// seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User'); // Ensure the path to User and Task models is correct
const Task = require('./models/Task');

// Load environment variables
dotenv.config();

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected for seeding...');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Dummy data for users
const users = [
  {
    username: 'admin1',
    firstName: 'John',
    lastName: 'Doe',
    password: 'adminpassword', // In real cases, ensure passwords are hashed
    role: 'Administrator',
  },
  {
    username: 'qa1',
    firstName: 'Jane',
    lastName: 'Smith',
    password: 'qapassword',
    role: 'QA',
  },
  {
    username: 'special1',
    firstName: 'Sarah',
    lastName: 'Connor',
    password: 'specialpassword',
    role: 'Special',
  },
  {
    username: 'tech1',
    firstName: 'Mike',
    lastName: 'Johnson',
    password: 'techpassword',
    role: 'Technician',
  },
];

// Dummy data for tasks
const tasks = [
  {
    name: 'Task 1',
    status: 'incomplete',
    assignedTo: null, // Will assign once users are created
    createdBy: null,  // Will assign once users are created
  },
  {
    name: 'Task 2',
    status: 'incomplete',
    assignedTo: null,
    createdBy: null,
  },
];

// Seed data function
const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Task.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log('Users seeded:', createdUsers);

    // Assign user IDs to tasks
    tasks[0].assignedTo = createdUsers[0]._id;
    tasks[0].createdBy = createdUsers[0]._id;
    tasks[1].assignedTo = createdUsers[1]._id;
    tasks[1].createdBy = createdUsers[1]._id;

    // Insert tasks
    const createdTasks = await Task.insertMany(tasks);
    console.log('Tasks seeded:', createdTasks);

    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Call the seed function
seedData();
