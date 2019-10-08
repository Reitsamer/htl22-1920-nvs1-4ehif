const fs = require('fs');

var außgabe='Hallo';
console.log(außgabe);

var stringArray = ['Banana','Apple'];
console.log(stringArray);

var persons = 
[{
    firstname: 'Filip',
    lastname: 'Adamovic',
    dateOfBirth: 'März. 06, 2002',
    city: 'Wien',
    country: 'Österreich'},
    {firstname: 'Mario',
    lastname: 'Schrolmberger',
    dateOfBirth: 'Dec. 31, 2001',
    city: 'Wien',country: 'Österreich'
}];

persons.forEach(element => {
    console.log(`${element.firstname} ${element.lastname}`);
});

function compare( a, b ) {
    if ( a.firstname < b.firstname ){
      return -1;
    }
    if ( a.firstname > b.firstname ){
      return 1;
    }
    return 0;
  }
  
persons.sort(compare);

persons.forEach(element => {
    console.log(`${element.firstname} ${element.lastname}`);
});

try {
    const data = fs.readFileSync('persons.db', 'utf8')
    var personData = JSON.parse(data);
  } catch (err) {
    console.error(err)
}
personData.forEach(element => {
    console.log(`${element.firstname} ${element.lastname}`);
});