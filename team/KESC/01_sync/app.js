// 1. Lege einen String an und gib ihn auf der Konsole aus
var aString = '';
console.log(aString);

// 2. Lege ein String-Array an und gib alle Elemente auf der Konsole aus
var someStrings = [
    '',
    '',
    '',
    ''
];
someStrings.forEach(s => console.log(s));

// 3. Lege ein Array von Objekten an.
//     Jedes Objekt soll eine Person beschreiben (Vorname, Nachname, Postleitzahl, Adresse,
//     Geburtsdatum)
// {"firstname":"Abigayle","lastname":"Kennedy","dateOfBirth":"Oct. 30, 1974","city":"Alexandria","country":"Egypt"}
var persons = [
    {
        firstname: 'Joseph',
        lastname: 'Stalin',
        dateOfBirth: 'Oct. 30, 1974',
        city: 'Gori',
        country: 'Georgia'
    },
    {
        firstname: 'Jeremy',
        lastname: 'Kescher',
        dateOfBirth: 'Oct. 23, 2001',
        city: 'Vienna',
        country: 'Austria'
    }
];

// 4. Gib alle Personen deines Arrays im Format "Nachname, Vorname" aus. (Verwende einen
// template-string dafür)
persons.forEach(p => {
    console.log(`${p.lastname}, ${p.firstname}`)
});

// 5. Erweitere Punkt 4 dahingehend, dass die Personen alphabetisch sortiert ausgegeben werden.
persons.sort(function (a, b) {
    if (a.lastname > b.lastname) {
        return 1;
    }
    if (a.lastname < b.lastname) {
        return -1;
    }
    return 0;
});

console.log();
var i = 0;
persons.forEach(p => {
    i++;
    console.log(`Person number ${i} (alphabeticly) is called ${p.lastname}, ${p.firstname}`)
});

if (process.argv.length !== 3) {
    console.log("Pass in the path to persons.db or persons.json as command line parameter to see steps ahead.");
    return;
}

// 6. Lies die Datei persons.db ein & konvertiere sie in ein JavaScript Objekt.
var fs = require('fs');
const data = fs.readFileSync(process.argv[2], 'utf8');
var dat = JSON.parse(data);
dat.forEach(s => console.log(s));
// 7. Verwende die in 6. eingelesenen Personen & gib alle Personen aus, die älter als 18 Jahre alt
// sind
// (Hinweis: verwende die Library 'moment' dafür)
// npm install moment ODER yarn add moment
var moment = require("moment");
persons.forEach(p => {
    var birthdate = moment(p.dateOfBirth, "MMM. D, YYYY");
    if (!birthdate.isValid()) {
        console.error(`Invalid birthdate of ${p.dateOfBirth}`);
        return;
    }
    const age = moment().diff(birthdate, 'years');
    if (age >= 18) {
        console.log(p);
    }
});