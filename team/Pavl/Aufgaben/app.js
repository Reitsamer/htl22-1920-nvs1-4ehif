const fs = require('fs');
var moment = require('moment');
var _ = require('lodash');
const countryList = require('countries-list');

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
        surname: 'Pavlovic',
        zip:1040,
        adress: 'Donaustadtstrasse 45',
        dateOfBirth: '24-02-1989'
    },

    {
        firstname:'Marcel',
        surname: 'Nikolic',
        zip:1040,
        adress: 'Donaustadtstrasse 45',
        dateOfBirth: '24-02-1989'
    },

    {
        firstname:'Marcus',
        surname: 'Rosel',
        zip:1040,
        adress: 'Donaustadtstrasse 45',
        dateOfBirth: '24-02-1989'
    }
];

//Aufgabe 4
arrayVonObjekten.forEach(element => {
    console.log(`${element.surname} ${element.firstname}`)
});

console.log();

//Aufgabe 5
console.log('Sortierte Ausgabe')
arrayVonObjekten.sort(
(a,b)=>
{
    if(a.surname>b.surname)
    {
        return 1;
    }
    else if(a.surname<b.surname)
    {
       return -1;
    }
}

);
console.log(arrayVonObjekten);
console.log();

//Aufgabe 6
var data=fs.readFileSync('persons.db','utf-8');
var personData=JSON.parse(data);
console.log(personData);
console.log();

//Aufgabe 7
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




