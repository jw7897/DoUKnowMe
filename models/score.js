const mongoose = require("mongoose"); 
const scoreSchenma = new mongoose.Schema({
  name: String,
  score: Number
});

const Score = mongoose.model("score", scoreSchenma);

module.exports = Score;