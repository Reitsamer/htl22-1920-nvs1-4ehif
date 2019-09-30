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
