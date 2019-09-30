// Aufgabe 1
console.log('// Aufgabe 1');
var test = 'Ich glaube nicht das jemand diese Nachricht sehen sollte :o';
console.log(test);

// Aufgabe 2
console.log('// Aufgabe 2');
var fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach(function(item, index, array) {
    console.log(item);
  });

// Aufgabe 3
console.log('// Aufgabe 3');
console.log('Sieht man nur im Code');
var arraypersonen=
[

    {
        Vorname:'Lena',
        Nachname: 'Swarovski',
        Postleitzahl: '1080',
        Adresse:'Tuppergasse',
        Geburtstag:'20/07/3',
    },

 
    {
        Vorname:'Lisa',
        Nachname: 'Berger',
        Postleitzahl: '1090',
        Adresse:'Kagglerstraße',
        Geburtstag:'12/03/20',
    }

];

// Aufgabe 4
console.log('// Aufgabe 4');
arraypersonen.forEach(function(item, index, array) {
    console.log(`Nachname: ${arraypersonen[index].Nachname} Vorname: ${arraypersonen[index].Vorname}`);
  });

// Aufgabe 5
console.log('// Aufgabe 5');
arraypersonen.sort(function(a, b){
    if(a.Nachname < b.Nachname) { return -1; }
    if(a.Nachname > b.Nachname) { return 1; }
    return 0;
})

arraypersonen.forEach(function(item, index, array) {
    console.log(`Nachname: ${arraypersonen[index].Nachname} Vorname: ${arraypersonen[index].Vorname}`);
  });

// Aufgabe 6
console.log('// Aufgabe 6');

const fs = require('fs');

try {
  const data = fs.readFileSync('persons.db', 'utf8')
  var persons = JSON.parse(data);
} catch (err) {
  console.log('Scotty wir haben ein Problem.')
  console.error(err)
}
persons.forEach(person => {
  console.log(`${person.firstname} ${person.lastname}`);
});


