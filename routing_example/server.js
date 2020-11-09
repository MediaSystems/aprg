// Express initiaisieren
const express = require("express");
const app = express();

// Server starten
app.listen(3000, function(){
    console.log("listening on port 3000");
});

// Get-Requests erfüllen
app.get(["/", "/welcome"], function(req, res){
    res.sendFile(__dirname + "/views/welcome.html");
});

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/loginerror", function(req, res){
    res.redirect("/welcome");
});

app.get("/overview", function(req, res){
    res.sendFile(__dirname + "/views/overview.html");
});

app.get("/logout", function(req, res){
    res.redirect("/welcome");
});

