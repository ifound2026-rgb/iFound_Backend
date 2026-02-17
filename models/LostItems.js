const express = require('express');
const router = express.Router();
const LostItem = require('../models/LostItems'); // make sure path is correct

// Create lost item
router.post('/', async (req, res) => {
  try {
    const lostItem = new LostItem(req.body);
    await lostItem.save();
    res.status(201).json(lostItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create lost item' });
  }
});

module.exports = router;
