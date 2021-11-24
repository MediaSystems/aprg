// Initialisierung Express
const express = require('express');
const app = express();

// Initialisierung EJS
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


// Initialisierung express-fileupload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// Ordner "images" öffentlich machen, hier werden hochgeladene Bilder abgelegt
app.use(express.static(__dirname + '/images'))

// Server starten
app.listen(3000, function() {
  console.log('listening on 3000')
});

const fs = require('fs')

// Darstellung des Upload-Formulars
app.get("/upload", function(req, res){
  res.sendFile(__dirname + "/views/upload_formular.html");
});


// Auswertung des Upload-Formulars
app.post('/onupload', function(req, res) {
  // siehe http://zhangwenli.com/blog/2015/12/27/upload-canvas-snapshot-to-nodejs/
  const dataURL = req.body.img;
  var matches = dataURL.match(/^data:.+\/(.+);base64,(.*)$/);
  var buffer = new Buffer.from(matches[2], 'base64');

  // speichert die Datei im Ordner images (der muss natürlich existieren)
  const testFilename = "Testbild.png" // TODO: der Name muss angepasst und in Datenbank gespeichert werden
  fs.writeFile(__dirname + "/images/" + testFilename, buffer, function (err) {
    console.log("done");
  });
});


app.get('/bildzeigen', function(req, res){
  const testFilename = "Testbild.png" // TODO: der Name muss angepasst und in Datenbank gespeichert werden
  res.render("bildzeigen", {"filename": testFilename});

});



