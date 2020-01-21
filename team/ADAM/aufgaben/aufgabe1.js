const fs = require('fs')
const moment = require('moment')
var _ = require('lodash');
const countryList = require('countries-list');

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

// 7 personData where Age > 18

personData.forEach(p => {
    var temp = moment().diff('03-10-2019', p.dateOfBirth)
    console.log(temp);
    if(temp > 18){
        console.log(`${p.lastname}, ${p.firstname} born -> ${p.dateOfBirth}`);
    }
})

console.log('\n\n Nummer 7');
// 7
var oldpersonData = []
personData.forEach(person => {
    if(moment().diff(person.dateOfBirth, 'years') >= 18) {
        console.log(`${person.lastname}, ${person.firstname}`);
        oldpersonData.push(person)
    }
})
 
 
// 8
oldpersonData.forEach(person => {
    var age = moment().diff(person.dateOfBirth, 'years')
    console.log(`${person.lastname}, ${person.firstname}, ${person.dateOfBirth}, ${age}`);
})
 
 
// 9

//Aufgabe 9
var newmap = _.mapKeys(countryList.countries,(value,key)=>{
    var name=value.name;
    value.name=key;
    value['ID']=value['name'];
    value['name']=name;
   return name;
});

//console.log(newmap.countries)

personData.forEach(e=>{
    if(newmap[e.country].continent==='EU'){
        console.log(e);
        console.log(newmap[e.country].emoji);
    }
})

