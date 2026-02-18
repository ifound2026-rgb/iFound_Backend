require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/adminAuth');
const lostRoutes = require('./routes/lost');

const app = express();

// ✅ CORS Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-domain.com' // replace later
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/lost', lostRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to iFound Backend!' });
});

module.exports = app;
