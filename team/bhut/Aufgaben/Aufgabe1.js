//1 
var txt="Heyyyy";
console.log(txt);

//2
var arry= ["Jan", "Feb", "Mar", "Apr","Mai", "Jun"];
console.log(arry);
arry.forEach(txt=>{console.log(txt)});

//3
var pers1={

    firstname:"nakuul",
    lastname:"metha",
    plz:"1220",
    adress:"Rennbahnweg 2",
    birthd:"02-11-2000"

};

var pers2={
    firstname:"edy",
    lastname:"delegan",
    plz:"1220",
    adress:"Kagraner Platz 12",
    birthd:"24-10-2000"
};
var pers3={
    firstname:"sana",
    lastname:"bhutto",
    plz:"1220",
    adress:"Wagramerstr. 162",
    birthd:"19-11-2000"
}

var ob= [pers1,pers2,pers3];
   
//4
ob.forEach(person => {
    console.log(`${person.fistname}, ${person.lastname}`);
});

//5
ob.sort(function (x,y) {
    if(x.lastname>y.lastname){
        return 1;
    }
    else if(x.lastname<y.lastname)
            {return -1;}

    return 0; 
    
});

ob.forEach(person => {
    console.log(`${person.fistname}, ${person.lastname}`);
});

//6
const fs= require('fs');

try{const data= fs.readFile("persons.db","utf8")
var persondata=JSON.parse(data)
}
catch {
    console.error('Error', error);
}
//7
personData.forEach(e=>{
    var birth = moment(e.dateOfBirth).format("YYYY-MM--DD");
    const age = moment().diff(e.dateOfBirth,'year');
    const isLegal = (age >= 18);
    if(isLegal){
        console.log(e.lastname," ", e.firstname," ",birth," ",age);
    }
});

//Aufgabe 9
var newmap = _.mapKeys(countryList.countries,(value,key)=>{
    var name=value.name;
    value.name=key;
    value['ID']=value['name'];
    value['name']=name;
   return name;
});

//console.log(newmap.countries)

personData.forEach(e=>{
    if(newmap[e.country].continent==='EU'){
        console.log(e);
        console.log(newmap[e.country].emoji);
    }
})