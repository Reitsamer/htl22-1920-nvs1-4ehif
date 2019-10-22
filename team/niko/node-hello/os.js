const os = require('os');
const fs = require('fs');

var x = os.userInfo() //x => object 
fs.appendFileSync("message.txt",`Hallo,${x.username}!`)

console.log(x);
console.log("Hello:" + x.username);	
console.log(fs)