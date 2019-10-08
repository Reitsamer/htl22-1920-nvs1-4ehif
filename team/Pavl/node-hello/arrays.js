var daysOfWeek = [
    'Monday',
    true,
    'Wednesday',
    'Thursday',
    NaN,
    2,
    null,
    undefined,
];

daysOfWeek.forEach(day => {
    console.log(`Today is ${day}`);
});

console.log(daysOfWeek);

var numbers = [
    445, 7767, 8886, 5345, 22, 4, 6, 9, 4, 2, 5, 7, 9,
];

var result = numbers.filter(
    number => number % 2 === 0
);

console.log(`Result: ${result}`);