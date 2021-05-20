const express = require("express");
const app = express();
const Quiz = require("./models/quiz");
const bodyParser = require('body-parser');
const Pin = require("./models/pins");
const Score = require("./models/score");

try{
	var config = require("./config");
} catch (err){
	console.log("Probably not working locally")
	console.log(err)
}

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

const mongoose = require('mongoose');

try{
	mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});
} catch(err){
	mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

}

app.get("/", (req,res) =>{
	res.render("landing");
});

app.get("/create", (req,res) =>{
	res.render("create");
});

app.post("/create", async (req, res) => {
	try{
  const vault = await Pin.findById("60635de557b121923bfd0a52");
  let xpin = Math.floor(Math.random() * (10000 - 999 + 1)) + 999;
  while(vault.codes.indexOf(xpin) >= 0){
  xpin = Math.floor(Math.random() * (999 - 10000 + 1)) + 999;
  }	
	Pin.updateOne(
   { "_id": "60635de557b121923bfd0a52"},
   { "$push": { "codes": xpin } },
   function (err, raw) {
       if (err) return handleError(err);
       console.log('The raw response from Mongo was ', raw);
   }
);
  const newQuiz = {
    name: req.body.name,
	question1: req.body.question1,
	question1RA: req.body.question1RA,
	question1FA1: req.body.question1FA1,
	question1FA2: req.body.question1FA2,
	question1FA3: req.body.question1FA3,
	question2: req.body.question2,
	question2RA: req.body.question2RA,
	question2FA1: req.body.question2FA1,
	question2FA2: req.body.question2FA2,
	question2FA3: req.body.question2FA3,
	question3: req.body.question3,
	question3RA: req.body.question3RA,
	question3FA1: req.body.question3FA1,
	question3FA2: req.body.question3FA2,
	question3FA3: req.body.question3FA3,
	question4: req.body.question4,
	question4RA: req.body.question4RA,
	question4FA1: req.body.question4FA1,
	question4FA2: req.body.question4FA2,
	question4FA3: req.body.question4FA3,
	question5: req.body.question5,
	question5RA: req.body.question5RA,
	question5FA1: req.body.question5FA1,
	question5FA2: req.body.question5FA2,
	question5FA3: req.body.question5FA3,
	pin: xpin
  }
  Quiz.create(newQuiz)
	.then((quiz) =>{
	  res.render("pin",{ xpin : xpin })
  })
	.catch((err) =>{
	  console.log(err);
	  res.render("error.ejs")
  })
	} catch(err) {
		console.log(err);
	}
})


app.post("/takeInpt", async (req, res) => {
try{
	const quiz = await Quiz.findOne({ pin: req.body.pin}).exec();
if(quiz === null){
	  res.render("error.ejs")
} else {
	res.render("take",{quiz})
}
} catch(err){
    res.render("error.ejs")
	console.log(err);
}

});

app.post("/take", async (req, res) => {
let score = 0;
if(req.body.q1answBtns == "<%=quiz.question1RA%>"){
	score += 1;
}
if(req.body.q2answBtns == "<%=quiz.question2RA%>"){
	score += 1;
}
if(req.body.q3answBtns == "<%=quiz.question3RA%>"){
	score += 1;
}
if(req.body.q4answBtns == "<%=quiz.question4RA%>"){
	score += 1;
}
if(req.body.q5answBtns == "<%=quiz.question5RA%>"){
	score += 1;
}

const newScore = {
	name: req.body.name,
	score: score,
	pin: req.body.getPin
}

  Score.create(newScore)
	.then((score) =>{
	  res.render("score",score)
  })
	.catch((err) =>{
	  console.log(err);
	  res.render("error.ejs")
  })
});

app.post("/resultsInpt", async (req, res) => {
try{
const score = await Score.find({pin: req.body.pin}).exec();
const quiz = await Quiz.findOne({pin: req.body.pin }).exec();
if(quiz === null){
	  res.render("error.ejs")
} else {
	res.render("results",{score,quiz})
}
} catch(err){
    res.render("error.ejs")
	console.log(err);
}
});

app.get("*", (req,res) =>{
	res.render("error");
})

app.listen(process.env.PORT || 3000, ()=>{console.log("I don't know you")});