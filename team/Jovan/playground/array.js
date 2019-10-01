var dayofWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

for (var i=0; i<dayofWeek.length;i++){
    console.log('Today is ', dayofWeek[i])
}

dayofWeek.forEach(day => {
    console.log('Heute ist:',day)
})

console.log(dayofWeek)

var numbers= [1,2,3,4,5,6,7,8,9]

numbers.forEach(number => {
    if(number %2 ===0)
    {console.log(number)}
})
    
var result =numbers.filter(number =>{
return number %2 ===0;
})

console.log('Result: ',result)