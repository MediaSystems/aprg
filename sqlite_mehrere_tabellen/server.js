// Initialisierung express
const express = require('express');
const app = express()

// Initialisierung body-parser
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// Initialisierung EJS
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// Initialisierung der Datenbank
const DATABASE = "shop.db";	// Pfad der Datenbankdatei
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(DATABASE);

// Aufruf im Browser: http://localhost:3000
app.listen(3000, function(){
	console.log("listening on 3000");
});

app.get("/bestellungen", function(req, res){
	db.all(`
		SELECT
			bestellungen.anzahl AS anzahl,
			produkte.name AS produkt_name,
			kunden.name AS kunde_name,
			produkte.preis AS preis
		FROM
			kunden, produkte, bestellungen
		WHERE
			kunden.id = bestellungen.kunden_id
		AND
			produkte.id = bestellungen.produkt_id
	`,
	function(err, rows){
		console.log(err);
		console.log(rows);
		res.render("bestellungen", {"bestellungen": rows});
	}
	);
});