const express = require('express');
const router = express.Router();
const LostItem = require('../models/LostItems'); // make sure the path is correct

// POST /api/lost
router.post('/', async (req, res) => {
  try {
    const lostItem = new LostItem(req.body); // create a new lost item from JSON
    const savedItem = await lostItem.save(); // save to MongoDB
    res.status(201).json(savedItem); // return the saved object
  } catch (err) {
    console.error(err); // log error in backend console
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
