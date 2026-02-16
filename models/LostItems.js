const mongoose = require("mongoose");

const LostItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  image: String,
  userId: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("LostItem", LostItemSchema);
