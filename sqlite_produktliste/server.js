// Initialisierung Express
const express = require("express");
const app = express();

// Initialisierung body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Initialisierung EJS
app.engine("ejs", require("ejs").__express);
app.set("view engine", "ejs");

// Initialisierung sqlite Datenbank
const DATABASE = "shop.db";
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(DATABASE);

// Server starten
app.listen(3000, function(){
    console.log("listening on 3000");
});

// Anzeige aller Produkte
app.get("/produktliste", function(req, res){
    db.all(
        `SELECT * FROM produkte`, 
        function(err, rows){
            console.log(rows);
            res.render("produktliste", {"produkte": rows});
        }
    );
});

// Formular zum Hinzufügen eines Produktes
app.get("/create", function(req, res){
    res.sendFile(__dirname + "/views/create.html");
});

// POST-Request oncreate fügt Produkt zur Liste
app.post("/oncreate", function(req, res){
    const param_name = req.body.produktname;
    const param_preis = req.body.produktpreis;

    db.run(
        `INSERT INTO produkte(name, preis) VALUES("${param_name}", ${param_preis})`,
        function(err){
            res.redirect("/produktliste");
        }
    );
});

app.post("/delete/:id", function(req, res){
    db.run(
        `DELETE FROM produkte WHERE id=${req.params.id}`,
        function(err){
            res.redirect("/produktliste");
        }
    );
});

app.post("/update/:id", function (req, res){
    // nach Datensatz mit id suchen und Werte an Formular übergeben
    db.all(
        `SELECT * FROM produkte WHERE id = ${req.params.id}`,
        function(err, rows){
            // Ausgabe z.B.: rows = [{ id: 3, name: 'Mauspad', preis: 6.66 }]
            res.render("update", rows[0]);
        }
    );
});

app.post("/onupdate/:id", function(req, res){
    const param_name = req.body.produktname;
    const param_preis = req.body.produktpreis;
    const param_id = req.params.id;

    db.run(
        `UPDATE produkte SET name="${param_name}", preis=${param_preis} WHERE id=${param_id}`,
        function(err){
            res.redirect("/produktliste");
        }
    );
});