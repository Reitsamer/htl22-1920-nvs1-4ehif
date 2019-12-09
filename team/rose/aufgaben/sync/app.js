var moment = require('moment');
var countrieslist = require('countries-list');
var _ = require('lodash');

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


// Aufgabe 7
console.log('// Aufgabe 7');

persons.forEach(p => {
  const age = moment().diff(p.dateOfBirth,'year');
  const isAdult = (age >= 18);
  if(isAdult){
      console.log(`Nachname: ${p.lastname} Vorname: ${p.firstname}`);
  }
});

// Aufgabe 8
console.log('// Aufgabe 8');

persons.forEach(p => {
    var birth = moment(p.dateOfBirth).format("YYYY-MM--DD");
    const age = moment().diff(p.dateOfBirth,'year');
    const isAdult = (age >= 18);
    if(isAdult){
        console.log(`Nachname: ${p.lastname} Vorname: ${p.firstname} Geburtstag: ${birth} Alter: ${age}`);
    }
});

// Aufgabe 9
console.log('// Aufgabe 9');

var map = _.mapKeys(countrieslist.countries,(value,key)=>{
  var name=value.name;
  value.name=key;
  value['ID']=value['name'];
  value['name']=name;
 return name;
});

persons.forEach(p=>{
  if(map[p.country].continent==='EU'){
      console.log(p);
      console.log(map[p.country].emoji);
  }
})

