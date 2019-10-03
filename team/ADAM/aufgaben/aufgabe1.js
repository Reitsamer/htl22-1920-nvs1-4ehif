const fs = require('fs')

// Aufgabe 1
var s = 'Hallo das ist Nummer 1';
console.log(s);

// Aufgabe 2
var sArr = ["Yigi", "Filip", "Mario", "Marko"];

// Aufgabe 3
var persons = [
    {
        firstname: 'Filip',
        lastname: 'Adamovic',
        age: 17,
        address: 'Opastraße 4'
    },
    {
        firstname: 'Mario',
        lastname: 'Schrolmberger',
        age: 17,
        address: 'Trapstraße 69'
    },
    {
        firstname: 'Yigithan',
        lastname: 'Gundus',
        age: 15,
        address: 'Turkmengasse 2'
    },
    {
        firstname: 'Rahman',
        lastname: 'Abdulh',
        age: 17,
        address: 'Streetstraße 4'
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
// person.sort((a,b) => a.firstname.localeCompare(b.firstname))
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

//testing if everything worked
  personData.forEach(person => {
    console.log(`${person.lastname}, ${person.firstname}`);
});
