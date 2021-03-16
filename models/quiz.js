const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  name: String,
  question1: String,
  question1A1: String,
  question1A2: String,
  question1A3: String,
  question1A4: String,
  question1A: Number,
  question2: String,
  question2A1: String,
  question2A2: String,
  question2A3: String,
  question2A4: String,
  question2A: Number,
  question3: String,
  question3A1: String,
  question3A2: String,
  question3A3: String,
  question3A4: String,
  question3A: Number,
  question4: String,
  question4A1: String,
  question4A2: String,
  question4A3: String,
  question4A4: String,
  question4A: Number,
  question5: String,
  question5A1: String,
  question5A2: String,
  question5A3: String,
  question5A4: String,
  question5A: Number
});


const Quiz = mongoose.model("quiz", quizSchema);

module.exports = Quiz;