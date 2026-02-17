require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminAuthRoutes = require('./routes/adminAuth');

const app = express();

// ✅ CORS Middleware: allow your frontend to access backend
app.use(cors({
  origin: [
    'http://localhost:3000', // local dev
    'https://your-frontend-domain.com' // replace with live frontend URL if deployed
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminAuthRoutes);

// Example: if you have lost items route
const lostRoutes = require('./routes/lost'); // make sure this file exists
app.use('/api/lost', lostRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to iFound Backend!');
});

// Dynamic port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
