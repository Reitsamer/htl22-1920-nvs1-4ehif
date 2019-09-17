const os = require('os');
const fs = require('fs');

var x = os.userInfo()

console.log('Hallo, '+x.username + '!')

fs.appendFileSync('message.txt',`Hallo, ${x.username}!`)