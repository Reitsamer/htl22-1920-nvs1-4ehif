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
