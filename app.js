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

app.post("/create", (req,res) =>{
	res.render("landing");
});

// router.post("/", isLoggedIn, async (req, res) => {
//   const mewQuiz = {
//     name: req.body.name
//   }

//   try {
//     const quiz = await Quiz.create(newQuiz)
//     res.redirect("/landing");
//   } catch (err) {
//     console.log(err);
//     res.redirect("/landing")
//   }
// })


app.listen(process.env.PORT || 3000, ()=>{console.log("I don't know you")});