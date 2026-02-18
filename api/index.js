require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('../routes/auth');
const adminAuthRoutes = require('../routes/adminAuth');
const lostRoutes = require('../routes/lost');

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-domain.com'
  ],
  credentials: true,
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/lost', lostRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Backend working!" });
});

module.exports = app;
