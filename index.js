//jshint esversion:6

const express = require("express");
const bodyPaser = require("body-parser");
const request = require("request");
const ejsTemp = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function(req, res){
    console.log(req.body.txt);
    
});



app.get("/tribute.html", function (req, res) {
  res.sendFile(__dirname + "/tribute.html");
});
app.get("/history.html", function (req, res) {
  res.sendFile(__dirname + "/history.html");
});
app.get("/gallery.html", function (req, res) {
  res.sendFile(__dirname + "/gallery.html");
});
app.get("/about.html", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
