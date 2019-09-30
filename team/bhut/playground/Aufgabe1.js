//1 
var txt="Heyyyy";
console.log(txt);

//2
var arry= ["Jan", "Feb", "Mar", "Apr","Mai", "Jun"];
console.log(arry);

//3
var pers1={
    fistname:"nakuul",
    lastname:"metha",
    plz:"1220",
    adress:"Rennbahnweg 2",
    birthd:"02-11-2000"

};

var pers2={
    fistname:"edy",
    lastname:"delegan",
    plz:"1220",
    adress:"Kagraner Platz 12",
    birthd:"24-10-2000"
};
var pers3={
    fistname:"sana",
    lastname:"bhutto",
    plz:"1220",
    adress:"Wagramerstr. 162",
    birthd:"19-11-2000"
}
]
var ob= [pers1,pers2,pers3];
   
//4
ob.array.forEach(person => {
    console.log(`${person.fistname}, ${person.lastname}`);
});

//5
ob.sort(function (x,y) {
    if(x.lastname>y.lastname){
        return 1;
    }
    else if(x.lastname<y.lastname)
            {return -1;}

    else return 0; 
    
});

ob.array.forEach(person => {
    console.log(`${person.fistname}, ${person.lastname}`);
});