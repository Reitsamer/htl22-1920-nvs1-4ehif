console.log("hello world");
var x = 10;
console.log("x: " +x);
console.log("x: ",x);
console.log(`x:${x}`);

x="SLOG";
console.log("x: ",x);

var person = {
    firstname: "Wolf",
    lastname: "Reitsamer",
    age:22,
    address: "1190, Hutweidengasse"
}

console.log(person);
console.log(`${person.firstname} ${person.lastname} is ${person.age} years old.`)

console.log()

//neue datei


const os = require('os');
const fs = require('fs');
var x= os.userInfo()
console.log(x)
console.log('Hallo, '+ x.username+'!')
fs.appendFileSync('message.txt',`Hallo,${x.username}!`)