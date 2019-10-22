const fs = require('fs')
const moment = require('moment')

// Aufgabe 1
var s = 'Hallo das ist Nummer 1';
console.log(s);

// Aufgabe 2
var sArr = ["Peter", "Sebastian", "Kevin", "Jeremy"];

// Aufgabe 3
var persons = [
    {
        firstname: 'Sebastian',
        lastname: 'Kaipel',
        age: 18,
        address: 'ich bin eine addresse 2'
    },
    {
        firstname: 'Peter',
        lastname: 'Jovanovic',
        age: 17,
        address: 'ich bin eine addresse 1'
    },
    {
        firstname: 'Kevin',
        lastname: 'Weber',
        age: 17,
        address: 'ich bin eine addresse 3'
    },
    {
        firstname: 'Jeremy',
        lastname: 'Kescher',
        age: 17,
        address: 'ich bin eine addresse 4'
    }
];

persons.forEach(person => {
        console.log(`${person.lastname}, ${person.firstname}`);
});

// 5
function compare(a,b){
    if(a.lastname < b.lastname){
        return -1;
    }
    if( a.lastname > b.lastname){
        return 1;
    }
    return 0;
}

persons.sort(compare);
console.log('\n\nSorted the Persons Array\n');

persons.forEach(person => {
    console.log(`${person.lastname}, ${person.firstname}`);
});

// 6
try {
    const data = fs.readFileSync('persons.db', 'utf8')
    var personData = JSON.parse(data);
  } catch (err) {
    console.error(err)
  }

  personData.forEach(person => {
    console.log(`${person.lastname}, ${person.firstname}`);
});

// 7
personData.forEach(p => {
    var temp = moment().diff('03-10-2019', p.dateOfBirth)
    console.log(temp);
    if(temp > 17){
        console.log(`${p.lastname}, ${p.firstname} born -> ${p.dateOfBirth}`);
    }
})
