// Initialisierung Express
const express = require('express');
const app = express();

// Initialisierung EJS
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// Initialisierung express-fileupload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

// Ordner "images" öffentlich machen, hier werden hochgeladene Bilder abgelegt
app.use(express.static(__dirname + '/images'))

// Server starten
app.listen(3000, function() {
  console.log('listening on 3000')
});

// Darstellung des Upload-Formulars
app.get("/upload", function(req, res){
  res.sendFile(__dirname + "/views/upload_formular.html");
});

// Auswertung des Upload-Formulars
app.post('/onupload', function(req, res) {
  console.log(req.files); // the uploaded file object

  // uploaded file object
  const file = req.files.filename;

  // Dateinamen mit Zeitstempel versehen (Anzahl Millisekunden seit 1.1.1970)
  const now = new Date();
  const newFilename = now.valueOf() + "_" + file.name;

  // Datei in Ordner Images verschieben
  file.mv(__dirname + '/images/' + newFilename);

  // Datei darstellen
  res.render("bildzeigen", {"filename": newFilename});
});






