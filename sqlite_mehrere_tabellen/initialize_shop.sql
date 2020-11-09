CREATE TABLE produkte (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    preis NUMERIC
);
INSERT INTO produkte (name, preis) VALUES ("USB-Stick", 19.99);
INSERT INTO produkte (name, preis) VALUES ("Festplatte", 89.99);
INSERT INTO produkte (name, preis) VALUES ("Mauspad", 6.66);
SELECT * FROM produkte;

CREATE TABLE kunden (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
INSERT INTO kunden (name) VALUES ("Maier");
INSERT INTO kunden (name) VALUES ("Schulz");
INSERT INTO kunden (name) VALUES ("Schröder");
SELECT * FROM kunden;

CREATE TABLE bestellungen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produkt_id INTEGER,
    kunden_id INTEGER,
    anzahl INTEGER
);
INSERT INTO bestellungen (produkt_id, kunden_id, anzahl) VALUES (2,2,1);
INSERT INTO bestellungen (produkt_id, kunden_id, anzahl) VALUES (3,1,3);
INSERT INTO bestellungen (produkt_id, kunden_id, anzahl) VALUES (3,3,1);
SELECT * FROM bestellungen;

/* Beispiel Anzeige aller Aufträge mit Namen */
SELECT bestellungen.anzahl, produkte.name, kunden.name 
FROM kunden, produkte, bestellungen
WHERE kunden.id = bestellungen.kunden_id
AND produkte.id = bestellungen.produkt_id;




/* Beispiel Anzeige aller Aufträge des Kunden Maier*/
SELECT bestellungen.anzahl, produkte.name, kunden.name 
FROM kunden, produkte, bestellungen
WHERE kunden.id = bestellungen.kunden_id
AND produkte.id = bestellungen.produkt_id
AND kunden.name = "Maier";
