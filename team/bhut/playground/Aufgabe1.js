//1 
var txt="Heyyyy";
console.log(txt);

//2
var arry= ["Jan", "Feb", "Mar", "Apr","Mai", "Jun"];
console.log(arry);

//3
var ob= [
    {
        fistname:"nakuul",
        lastname:"metha",
        plz:"1220",
        adress:"Rennbahnweg 2",
        birthd:"02-11-2000"

    },
    {
        fistname:"edy",
        lastname:"delegan",
        plz:"1220",
        adress:"Kagraner Platz 12",
        birthd:"24-10-2000"
    },
    {
        fistname:"sana",
        lastname:"bhutto",
        plz:"1220",
        adress:"Wagramerstr. 162",
        birthd:"19-11-2000"
    }
]
//4
ob.array.forEach(person => {
    console.log(`${person.fistname}, ${person.lastname}`);
});

//5

