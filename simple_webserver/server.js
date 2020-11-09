const express = require("express");
const app = express();


// den Ordner public freigeben
app.use(express.static(__dirname + "/public"));

// Startet Webserver
app.listen(3000, function(){
    console.log("listening on 3000");
});

// verknüpft die Anfrage /hello mit einer entsprechenden Antwort
app.get("/hello", function(req, res){
    res.send("Hello World");
    /* wäre möglich:
    res.send(`
    <html>
        <head></head>
        <body></body>
    </html>`
    );
    */
});

app.get("/helloworld", function(req, res){
    res.sendFile(__dirname + "/hello.html");
});

