// Initialisierung Express
const express = require('express');
const app = express()

// Initialisierung body-parser
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// EJS Template Engine initialisieren
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// Initialisierung express-session
const session = require('express-session');
app.use(session({
    secret: 'example',
    saveUninitialized: false,
    resave:false
}));

// Server starten
app.listen(3000, function() {
  console.log('listening on 3000')
});

// Sessionvariable setzen
app.post("/sessionSetzen", function(req, res){
    // Wert aus Formular lesen
    const param_sessionValue = req.body.sessionValue;

    // Sessionvariable setzen
    req.session.sessionValue = param_sessionValue;

    // Weiterleiten
    res.redirect("/zeigesession");
});

// Sessionvariable löschen
app.get("/sessionLoeschen", function(req, res){
    req.session.destroy();

    // Weiterleiten
    res.redirect("/zeigesession");
});

// Sessionvariable lesen
app.get("/zeigesession", function(req, res){
    if (!req.session.sessionValue){
        res.render("zeigesession", {"message": "nicht gesetzt"});
    }
    else{
        res.render("zeigesession", {"message": req.session.sessionValue});
    }
});