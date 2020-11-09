// Initialisierung Express.js
const express = require("express");
const app = express();

// Initialisierung Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Initialisierung EJS
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");


// Server starten
app.listen(3000, function(){
    console.log("server started on port 3000");
});

// Get-Request
app.get("/kontakteingabe", function(req, res){
    res.sendFile(__dirname + "/views/kontakteingabe.html");
});

// Post-Request
app.post("/neuerKontakt", function(req, res){
    const vorname = req.body.vorname; // auch möglich ...= req.body["vorname"]
    const nachname = req.body.nachname;
    // res.send(`Willkommen ${vorname} ${nachname}`);

    res.render("kontaktausgabe", {"vorname": vorname, "nachname": nachname});

});