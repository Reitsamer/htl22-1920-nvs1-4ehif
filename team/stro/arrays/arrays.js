var daysOfWeek=[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

for(var i=0;i<daysOfWeek.length;i++){
    console.log('Todays is: ', daysOfWeek[i])
}
console.log();

daysOfWeek.forEach(day => {//Arrow function
    console.log('Heute ist: ',day)
})

console.log(daysOfWeek)


var numbers=[
    2,5,7,10,25,47,99,103
]

numbers.forEach(number=>{
    if(number %2===0){
        console.log(number)
    }
})

console.log();

var result=numbers.filter(number =>{
    if(number%2===0){
        return true
    }
})

var result=numbers.filter(number =>number%2===0)

console.log('Result: ',result)