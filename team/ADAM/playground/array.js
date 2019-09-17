var daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

// for (var i = 0; i < daysOfWeek.length; i++) {
//     Console.log('Today is: ', daysOfWeek[i])
// }

daysOfWeek.forEach(day => {
    console.log('Today is: ', day);
});

console.log(daysOfWeek);

var numbers = [
    2, 5, 7, 10, 25, 47, 99, 103
];

numbers.forEach(number =>  {
        console.log(number);
});

console.log();

// shit version
// var result = numbers.filter(number => {
//         return number % 2 === 0;
// });

var result = numbers.filter(number => number % 2 === 0);

console.log('Result: ', result);