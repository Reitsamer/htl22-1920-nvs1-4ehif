var daysOfWeek =[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thusday',
    'Friday',
    'Saturday',
    'Sunday'
]

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log('Today is:', daysOfWeek[i])
    
}
console.log()

daysOfWeek.forEach(day => {
    console.log('Heute ist:' ,day)
})

console-localStorage(daysOfWeek)

var numbers = [
    2,2,5,35,5,6,7,8,2,234
]
numbers.forEach(number=> {
    if(number %2===0){
        console.log(number)
    }
})


console.log();

var result = numbers.filter(number => number %2===0)

console.log('Result:',result)