const os = require('os');

var x = os.userInfo();

console.log(x);

console.log('Hallo, ' + x.username + '!');