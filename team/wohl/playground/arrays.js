var daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
for(var i = 0; i < daysOfWeek.length; i++){
    console.log('Today is: ', daysOfWeek[i])
}
console.log(daysOfWeek)
daysOfWeek.forEach(day => {
    console.log('Heute ist: ', day)
})

var emptyArray = []

var numbers = [
    2, 5, 7, 10, 25, 47, 99, 103
]
numbers.forEach(n => {
    if (n % 2 === 0) {
        console.log(n);
    }
})
console.log()
var res = numbers.filter(n => {
    return n % 2 === 0;
})
console.log('Result: ', res)

console.log(numbers.filter(n => n % 2 === 0));