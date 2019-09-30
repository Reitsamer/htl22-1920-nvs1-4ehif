// console.log('Hello World');
// var x = 10;
// console.log('x: ' + x);
// console.log('x:', x);
// console.log(`x: ${x}`);

// x='SLOG'
// console.log(x);

// var person = {
//     firstname:'Mario',
//     lastname:'Schrolmbegrer',
//     age:22,
//     address:'1220, Addresse'
// }
// console.log(`${person.firstname}, ${person.lastname}, is ${person.age}`);

const os = require('os');
const fs = require('fs');

var x = os.userInfo();

console.log(x);
console.log('Hallo, ' + x.username + '!');

fs.appendFileSync('message.txt',`Hallo, ${x.username}`)