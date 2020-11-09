const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(3000, function(){
    console.log("listening on 3000");
});

app.get("/", function(req, res){
    // liest alten Wert des Cookies bzw. initiaisiert mit 0
    let counter = parseInt(req.cookies.counter) || 0;

    counter++;
    const maxAge = 3600 * 1000; // one hour
    // Cookie setzen
    res.cookie('counter', counter, {"maxAge": maxAge});

    res.send(`
        <html>
            <head>
                <title>Cookie</title>
            </head>
            <body>
                <h1>diese Seite wurde ${counter} Mal aufgerufen </h1>
            </body>
        </html>
    `);
});