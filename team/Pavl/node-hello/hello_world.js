const fs = require('fs');
const os = require('os');


var x= os.userInfo();



console.log(x);
console.log(x.username);
console.log('Hallo');

fs.appendFileSync('message.txt',`Hallo, ${x.username}`);