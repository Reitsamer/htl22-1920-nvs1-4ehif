var dayOfWeek=['Monday','Tuesday','Wednesday','Thursday','Firiday','Saturday','Sunday'];
console.log(dayOfWeek);

dayOfWeek.forEach(day => {console.log('Heute ist: ', day)});


var number=[2,5,7,10,12];

number.forEach(n=>{
    if(n%2===0)
    {
        console.log(n)
    }
});


var result =number.filter(n=>{return n%2===0;});
console.log(result);


var result =number.filter(n=> n%2===0);
console.log(result);