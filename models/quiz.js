const mongoose = require("mongoose"); 
const quizSchema = new mongoose.Schema({
  name: String,
  question1: String,
  question1RA: String,
  question1FA1: String,
  question1FA2: String,
  question1FA3: String,
  question2: String,
  question2RA: String,
  question2FA1: String,
  question2FA2: String,
  question2FA3: String,
  question3: String,
  question3RA: String,
  question3FA1: String,
  question3FA2: String,
  question3FA3: String,
  question4: String,
  question4RA: String,
  question4FA1: String,
  question4FA2: String,
  question4FA3: String,
  question5: String,
  question5A: String,
  question5FA1: String,
  question5FA2: String,
  question5FA3: String
});


const Quiz = mongoose.model("quiz", quizSchema);

module.exports = Quiz;