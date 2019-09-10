console.log('Hello World');

var x = 10;
console.log('x: '+ x);
console.log('x:', x);
console.log(`x: ${x}`);//template string

x = 'SLOG';
console.log(`x: ${x}`); 

var person = {
    firstname: 'Wolf',
    lastname: 'Reitsamer',
    age: 22,
    address: '1190, Hutweidengasse'
}

console.log(`${person.firstname} ${person.lastname} is ${person.age} years old`);
