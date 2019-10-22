console.log('Hello 4EHIF!')

const fs = require('fs');
const os = require('os');

var x = os.userInfo()
console.log(x)

console.log(x.username)

console.log('Hallo, ' + x.username + '!')

console.log(fs)

fs.appendFileSync('message.txt', `Hallo, ${x.username}!`)