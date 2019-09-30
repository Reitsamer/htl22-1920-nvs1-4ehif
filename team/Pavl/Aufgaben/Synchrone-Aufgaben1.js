//Aufgabe 1
var ctxt='String für Console';
console.log(ctxt);

console.log();

//Aufgabe 2
console.log("Möglichkteit 1");
var array=['Marko','Marcel','Marcus','Hasan'];
array.forEach(element => {
    console.log(element)
});

console.log();

console.log("Möglichkeit 2");
console.log(array);

//Aufgabe 3
console.log();

var arrayVonObjekten=[
    {
        firstname:'Marko',
        surname: 'Pavlovic'
    },

    {
        firstname:'Marcel',
        surname: 'Nikolic'
    },

    {
        firstname:'Marcus',
        surname: 'Rosel'
    }
];

arrayVonObjekten.forEach(element => {
    console.log(`${element.surname} ${element.firstname}`)
});

console.log('Sortierte Ausgabe')
arrayVonObjekten.sort(function(a,b) {return b-a});
console.log(arrayVonObjekten);
