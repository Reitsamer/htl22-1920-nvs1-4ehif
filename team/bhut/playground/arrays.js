
var daysOfWeek=[
    "Monday" ,
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday",
    "Sunday"


]

for(var i=0; i<daysOfWeek.length;i++){
    console.log("Today is: ", daysOfWeek[i])
}
console.log();

daysOfWeek.forEach(day =>{console.log("heute is: ", day)
});

console.log(daysOfWeek);

var numbers=[
    2,5,7,9,3,4,55,66,77,10
]

numbers.forEach(number => { 
    if(number %2===0){
        console.log(number)
    }
})

console.log();

var result = numbers.filter(number=>{
return number % 2 === 0;
});

var result = numbers.filter(number=> number % 2 === 0);

console.log("Result: ", result);