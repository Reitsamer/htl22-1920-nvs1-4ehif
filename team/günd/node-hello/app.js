
const os = require('os');
const fs = require('fs');

console.log('Hello 4EHIF!')


var x = 10
console.log('x:'+x)
console.log('x:',x)
console.log(`x:${x}`)


console.log('Hallo, '+x.username + '!')

fs.appendFileSync('message.txt',`Hallo, ${x.username}!`)

x = 'SLOG'
console.log('x:',x)

var person = {
    firstname: 'Yigi',
    lastname: 'Gigi',
    age: 22,
    address: '1210, Hollywoodstraze'
}

console.log(`${person.firstname} ${person.lastname} is ${person.age} years old.`)

