//1
var string ='Hello it is I, String';
console.log(string);
//2
var stringarray=[
    'I am an',
    'String array'
]
stringarray.forEach(stringael=>{
    console.log(stringael);
})
//3
var per1 = {
    firstname: "Peter",
    lastname: "Jovanovic",
    postcode:"1220",
    address: "Erzherzogkarlstraße 250 11/9",
    birthday:"24.08.2002"
}
var per2 = {
    firstname: "Satan",
    lastname: "Satan",
    postcode:"Who knows",
    address: "Hell",
    birthday:"before the calender got invented"
}
var perarray=[
    per1,
    per2,
]
perarray.forEach(per=>{
    console.log(per)
})
//4
var i=0;
perarray.forEach(p=>{
    i++;
    console.log(`Person number ${i} is called ${p.lastname}, ${p.firstname}`)
})
//5
perarray.sort(function(a, b){
    if(a.lastname > b.lastname) { return 1; }
    if(a.lastname < b.lastname) { return -1; }
    return 0;
})
console.log();
i=0;
perarray.forEach(p=>{
    i++;
    console.log(`Person number ${i} (alphabeticly) is called ${p.lastname}, ${p.firstname}`)
}) 
//6
var fs = require('fs');
const data = fs.readFileSync('htl22-1920-nvs1-4ehif/team/Jovan/Homework/persons.db', 'utf8')
var persons = JSON.parse(data)
persons.forEach(s => console.log(s))
/*var isurehopethisworks = fs.readFileSync("htl22-1920-nvs1-4ehif/team/Jovan/Homework/persons.db").toString();
isurehopethisworks = isurehopethisworks.substring(3,isurehopethisworks.length-3)
console.log(isurehopethisworks)
var itworked =isurehopethisworks.split("\"},{\"");
var perarray2=[]
perarray2.forEach(per=>{
    console.log(per)
})
itworked.forEach(per=>{
    var temparray= per.split("\",\"");
    var ifyoudontworkiwillbeatyo= {
        firstname: "",
        lastname: "",
        dateOfBirth:"",
        city:"",
        country: ""
    }
    temparray.forEach(objecto=>{
        var anothertemparray=objecto.split("\":\"")
        switch(anothertemparray[0]) {
            case "firstname":
                ifyoudontworkiwillbeatyo.firstname=anothertemparray[1];
              break;
            case "lastname":
                ifyoudontworkiwillbeatyo.lastname=anothertemparray[1];
              break;
            case "dateOfBirth":
                ifyoudontworkiwillbeatyo.dateOfBirth=anothertemparray[1];
              break;
            case "city":
                ifyoudontworkiwillbeatyo.city=anothertemparray[1];
               break;
            case "country":
                ifyoudontworkiwillbeatyo.country=anothertemparray[1];
               break;
          }      
    })
    perarray2.push(ifyoudontworkiwillbeatyo);
})
perarray2.forEach(per=>{
    console.log(per)
})*/
// 7.
// (Hinweis: verwende die Library 'moment' dafür)
// npm install moment ODER yarn add moment
var moment = require("moment");
persons.forEach(p => {
    var birthdate = moment(p.dateOfBirth, "MMM. D, YYYY");
    if (!birthdate.isValid()) {
        console.error(`Invalid birthdate of ${p.dateOfBirth}`);
        return;
    }
    const age = moment().diff(birthdate, 'years');
    if (age >= 18) {
        console.log(p.firstname+' '+p.lastname+' '+p.dateOfBirth);
    }
});