const mongoose = require("mongoose"); 
const scoreSchenma = new mongoose.Schema({
  name: String,
  score: Number,
  pin: Number
});

const Score = mongoose.model("score", scoreSchenma);

module.exports = Score;