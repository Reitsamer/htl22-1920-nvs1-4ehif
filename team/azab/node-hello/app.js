const os = require('os');
const fs = require('fs');

var x = os.userInfo()

console.log(x)

console.log(x.username)
console.log()

console.log('Hallo, ' + x.username + '!')

fs.appendFileSync('message.txt', `Hallo, ${x.username}!`)
console.log()
console.log()

console.log('Hello 4EHIF!')

var x = 10;
console.log('x:' + x)
console.log('x:', x)
console.log(`x:${x}`)

x = 'SLOG'
console.log('x:', x)

var person = {
    firstname: 'Rahman',
    lastname: 'Elazab',
    age: 17,
    address: '1210, Leopoldauer Straße'
}

console.log(`${person.firstname} ${person.lastname} is ${person.age} years old.`)