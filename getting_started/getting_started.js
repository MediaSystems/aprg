// Hello World
console.log("Hello World"); 

/* Variable, die ihren Wert nicht verändern darf */
const begruessung = "Moin";
console.log(begruessung);
// geht nicht:
// begruessung = "Guten Morgen";

// let deklariert veränderliche Variablen
let wochentag = "Mittwoch";
console.log("Heute ist " + wochentag + ".");
wochentag = "Donnerstag";
console.log("Heute ist " + wochentag + ".");

// Template Strings
console.log(`Heute ist ${wochentag}.`);

// for-Schleife
for (let i = 0; i < 10; i++){
    console.log(`${i+1}-ter Schleifendurchlauf`)
}

// Arrays
let numbers = [5, -7, 10, 13];
console.log(numbers);
numbers.push(19);
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for (number of numbers){
    console.log(number);
}
// Anwendung: Fehlerbeschreibungen
let errorStrings = [];
errorStrings.push("ungültige Email-Adresse.");
errorStrings.push("Kreditkartennummer fehlt.");
for (error of errorStrings){
    console.log(error);
}

// Objekt
let fixie = {};
fixie.type = "Fixie";
fixie.gears = 1;
fixie.color = "black";
console.log(fixie);
fixie.gears = 3;
console.log(fixie);
fixie["gears"] = 7;
console.log(fixie);

// JSON-Notation (Javascript Object Notation)
let gazelle = {
    type: "Gazelle",
    gears: 3,
    color: "yellow"
};
console.log(gazelle);

// Array von Objekten
let bicycles = [
    {type: 'Fixie', gears: 1, color: 'red'},
    {type: 'Giro', gears: 30, color: 'silver'},
    {type: 'Gazelle', gears: 3, color: 'blue'}
];

for (bike of bicycles){
    console.log(bike.type);
}

// Funktionen
function addieren(a, b){
    const summe = a + b;
    return summe;
}
console.log(addieren(5, 34));

function finde(liste, type){
    for (bike of liste){
        if (bike.type == type){
            return bike;
        }
    }
    return {};
}
console.log(finde(bicycles, "Giro"));