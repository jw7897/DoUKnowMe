const express = require("express");
const app = express();
const config = require("./config");
const Quiz = require("./models/quiz")
const bodyParser = require('body-parser')
const Pin = require("./models/pins")
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});


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
	  console.log(quiz);
	  res.render("pin",{ xpin : xpin })
  })
	.catch((err) =>{
	  console.log(err);
	  res.redirect("/fdsd")
  })
	} catch(err) {
		console.log(err);
	}
})


app.get("/take/:pin", async (req, res) => {
const quiz = await Quiz.findOne({ code: req.params.pin }).exec();
});

app.listen(process.env.PORT || 3000, ()=>{console.log("I don't know you")});