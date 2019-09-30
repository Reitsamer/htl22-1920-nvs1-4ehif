console.log('hello world');

var x=10;

console.log('x:'+x);
console.log('x',x);
console.log(`x:${x}`);  

x='Slog'

console.log('x:',x);

var person={
    firstname:'Marko',
    lastname: 'Pavlovic',
    age:22,
    adress:'1040, Wien'
}
console.log(person);
console.log(person.firstname);
console.log(`${person.firstname} ${person.lastname} is ${person.age} years old`);