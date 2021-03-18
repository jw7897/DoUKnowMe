const express = require("express");
const app = express();
const config = require("./config");
const Quiz = require("./models/quiz")

app.set("view engine", "ejs");
app.use(express.static("public"));

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});


app.get("/", (req,res) =>{
	res.render("landing");
});

app.get("/create", (req,res) =>{
	res.render("create");
});

app.post("/create", (req, res) => {
  const newQuiz = {
    name: req.body.name
  }

  Quiz.create(newQuiz)
	.then((quiz) =>{
	  console.log(quiz);
	  res.redirect("/test")
  })
	.catch((err) =>{
	  console.log(err);
	  res.redirect("/fdsd")
  })
})


 

app.listen(process.env.PORT || 3000, ()=>{console.log("I don't know you")});