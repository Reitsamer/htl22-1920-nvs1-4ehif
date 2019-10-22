console.log("Hello World!")

var x = 10; 
console.log("x:" + x)
console.log("x",x)
console.log(`x:${x}`)

x="SLOG"
console.log("x",x)

var person = {
    fistname: "Marcel",
    lastname: "Nikolic",
    age: 18,
    address: "1220, Auhirschwenweg 17",
} //0bject

console.log(`${person.fistname}  ${person.lastname} is  ${person.age} years old!`) //templet string

//array

var daysofweek =[

    'Monday',
    'Tuesday',
    'Wendnesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

for (var i=0;i < daysofweek.length; i++)
{
    console.log("Today is :", daysofweek[i]);
}
daysofweek.forEach(day => { //ES6
    console.log("Heute ist:",day)
})
console.log(daysofweek);

var numbers= [
    2,4,5,6,7,8,5,6
]
numbers.forEach(number => {
    if(number % 2 === 0)
    {
        console.log(number)
    }
})

console.log()
//filtern
var result = numbers.filter(number => {
    return number %2 === 0; // all numbers 
})

//Für Pros => var result = numbers .filter(number => number %2 === 0)

console.log("Result",result)

