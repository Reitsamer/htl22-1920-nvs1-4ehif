const os = require('os');

var x = os.userInfo();

console.log(x);

console.log('Hallo, ' + x.username + '!');

var a = 10;
var b = 20;
var result = a + b;

var result = `Result: ${result}`;

console.log(result);