require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/adminAuth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminAuthRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to iFound Backend!');
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
