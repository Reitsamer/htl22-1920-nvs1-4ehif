var daysofWeek=[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Friday',
    'Saturday',
    'Sunday'
]
for(var i=0;i<daysofWeek.length;i++)
{
    console.log('Today is: ',daysofWeek[i])
}
console.log()
//arrow funktion
daysofWeek.forEach(day =>{
    console.log('Heute ist: ',day)
})

console.log(daysofWeek);

var numbers =[
    2,5,7,10,25,47,99,103
]

numbers.forEach(number =>{
    if(number%2 === 0)
    {
        console.log(number);
    }
})
console.log()

var gerade= numbers.filter(number=>{
   return number%2===0
})
console.log(gerade)
gerade= numbers.filter(number=> number%2===0)
console.log(gerade)