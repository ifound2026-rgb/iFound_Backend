const express = require('express');
const router = express.Router();
const LostItem = require('../models/LostItems'); // adjust path if needed

// POST /api/lost
router.post('/', async (req, res) => {
  try {
    const newLostItem = new LostItem(req.body);
    const savedItem = await newLostItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save lost item', error: err.message });
  }
});

module.exports = router;
