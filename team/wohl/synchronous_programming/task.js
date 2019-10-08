
const fs = require('fs');

var txt = 'string'
console.log(txt)
var arr = ['st1', 'st2', 'st3']
console.log(arr)
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
console.log()
console.log('Unsorted:')
console.log()
parr.forEach(p => console.log(`${p.lastname}, ${p.firstname}`))
console.log()
console.log('Sorted:')
var sorted = parr.sort(function(a, b) {
  var nameA = a.lastname.toUpperCase();
  var nameB = b.lastname.toUpperCase();
  if (nameA < nameB) { return -1; }
  if (nameA > nameB) { return 1; }
  return 0;
});
sorted.forEach(s => console.log(`${s.lastname}, ${s.firstname}`))

try{
    var file = fs.readFileSync('persons.db', 'utf8')
    var dat = JSON.parse(file)
} catch(err) {
  console.log(err)
}

dat.forEach(s => console.log(`${s.lastname}, ${s.firstname}`))