console.log('Hello 4EHIF!')

var x = 10
console.log('x: ' + x )
console.log('x:',x )
console.log(`x: ${x}`)

x= 'slog'
console.log('x:',x)

var person ={
    firstname: 'Mat',
    lastname: 'Vin',
    age: 21,
    address: 'htl-donaustadt'

}
console.log(`${person.firstname} ${person.lastname} is ${person.age} years old.`)

const os = require('os');
const fs = require('fs');

var x = os.userInfo()
console.log('Hallo '+x.username+'!');
console.log()
fs.appendFileSync('message.txt',`Hallo, ${x.username}!`)

//HAUSÜBUNG
//1
var s ='einString';
console.log(s);
//2
var sa =[
    '1',
    '2',
    '3',
    '4'
];
sa.forEach(number => {console.log(number)});
//3
var persons = [
    {
        firstname: 'mat',
        lastname: 'vin',
        dateOfBirth: 'April. 10, 1998',
        city: 'Vienna',
        country: 'Austria'
    },
    {
        firstname: 'abc',
        lastname: 'abc',
        dateOfBirth: 'April. 10, 1998',
        city: 'Vienna',
        country: 'Austria'
    },
    {
        firstname: 'cba',
        lastname: 'cba',
        dateOfBirth: 'April. 10, 1998',
        city: 'Vienna',
        country: 'Austria'
    }
];

//4 //5
person.sort((a,b) => a.firstname.localCompare (b.firstname));
persons.forEach(p => {
    console.log(`${p.lastname}, ${p.firstname}`) 
});
// 5 richtig 



//6
const fs = require('fs')

fs.readFile('person.bd', (err, data) => { //person.jason
  if (err) {
    console.error('Error', err)
    return
  }
  console.log(data)
})

