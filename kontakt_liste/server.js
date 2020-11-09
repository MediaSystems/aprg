// Initialisierung
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

// Server starten
app.listen(3000, function(){
    console.log("server started on port 3000");
});

// GET REquest 

let kontaktliste = [
    {vorname: "Alice", nachname: "Schulz"},
    {vorname: "Bob", nachname: "Harvey"},
    {vorname: "Carla", nachname: "Carter"}
];

app.get("/kontaktliste", function(req, res){
    res.render("kontaktliste", {"kontaktliste": kontaktliste});
});

app.get("/zeigekontakt/:id", function(req, res){
    const index = req.params.id;
    res.render("kontaktzeigen", {kontakt: kontaktliste[index]});
});