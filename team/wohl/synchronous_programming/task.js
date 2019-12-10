
const fs = require('fs');

// 1
var txt = 'string'
console.log(txt)

// 2
var arr = ['st1', 'st2', 'st3']
console.log(arr)

// 3
var parr = [
    person = {
        firstname: 'Erik',
        lastname: 'Wohlrab',
        postalcode: '10',
        birthday: 2002-02-10,
        address: '1210, Castlegasse'
      },
      person = {
        firstname: 'Rahman',
        lastname: 'Abou',
        postalcode: '20',
        birthday: 2002-01-08,
        address: '1210, Somewhere'
      },
      person = {
        firstname: 'Mario',
        lastname: 'Schrolmberg',
        postalcode: '30',
        birthday: 2001-12-31,
        address: '1220, Somewhere'
      }
]

// 4
console.log()
console.log('Unsorted:')
console.log()
parr.forEach(p => console.log(`${p.lastname}, ${p.firstname}`))
console.log()

// 5
console.log('Sorted:')
//var sorted = parr.sort(function(a, b) {
//  var nameA = a.lastname.toUpperCase();
//  var nameB = b.lastname.toUpperCase();
//  if (nameA < nameB) { return -1; }
//  if (nameA > nameB) { return 1; }
//  return 0;
//});

var sorted = parr.sort((a, b) => a.lastname.localeCompare(b.lastname));

sorted.forEach(s => console.log(`${s.lastname}, ${s.firstname}`))

// 6
try{
    var file = fs.readFileSync('persons.db', 'utf8')
    var dat = JSON.parse(file)
} catch(err) {
  console.log(err)
}

dat.forEach(s => console.log(`${s.lastname}, ${s.firstname}`))

console.log();
console.log('---------------------------------------------------------------');
console.log();
// 7
var moment = require("moment");
dat.forEach(p => {
    var birthdate = moment(p.dateOfBirth, "MMM. D, YYYY");
    if (!birthdate.isValid()) {
        console.error(`Invalid birthdate of ${p.dateOfBirth}`);
        return;
    }
    const age = moment().diff(birthdate, 'years');
    if (age >= 18) {
        //console.log(p);

        //8
        console.log(`${p.lastname}, ${p.firstname}, ${moment(p.dateOfBirth).format('YYYY-MM-DD')}, ${age}`)
    }
});

// 9
const {getCode, getName} = require('country-list')
const countryList = require('countries-list')
const _ = require('lodash')
console.log(getCode('Austria'))

var newmap = _.mapKeys(countryList.countries,(value,key)=>{
  var name=value.name;
  value.name=key;
  value['ID']=value['name'];
  value['name']=name;
 return name;
});

dat.forEach(e=>{
  if(newmap[e.country].continent==='EU'){
      console.log(e);
      console.log(newmap[e.country].emoji);
  }
})