const fs = require('fs')
// 1
var x = "Ball";
console.log(x);
//2
var mannschaft = [
     "Ronaldo",
     "Messi",
     "Neymar"
]
console.log(mannschaft);
//3
var tisch = [
    {
        Vorname:"Maria",
        Nachname: "Licht",
        Postleitzahl: 1200,
        Adresse: "Buchtgasse 21",
        Geburtsdatum:"20.07.2000"
    },
    {
        Vorname: "Yigi",
        Nachname: "Gündüz",
        Postleitzahl: 1210,
        Adresse: "Kleine Straße 92",
        Geburtsdatum: "07.01.2002"
    },
    {
        Vorname:"Suad",
        Nachname: "Kaymaz",
        Postleitzahl: 1030,
        Adresse: "Landstraße 21",
        Geburtsdatum:"02.04.1999"
    }
]
console.log(tisch);
//4
tisch.forEach(y =>{
    console.log(`${y.Nachname} ${y.Vorname}`)
})
//5
tisch.sort((a, b) => a.Nachname.localeCompare(b.Nachname));
tisch.forEach(y =>{
    console.log(`${y.Nachname} ${y.Vorname}`)
})
//6
try {
    const data = fs.readFileSync('persons.db', 'utf8')
    var person = JSON.parse(data);
    console.log(person)
  } catch (err) {
    console.error(err)
  }

//7
person.forEach(e=>{
    const age = moment().diff(e.dateOfBirth,'year');
    const isLegal = (age >= 18);
    if(isLegal){
        console.log(e.lastname," ", e.firstname," ",e.dateOfBirth," ",age);
    }
});


//9
var newmap = _.mapKeys(countryList.countries,(value,key)=>{
    var name=value.name;
    value.name=key;
    value['ID']=value['name'];
    value['name']=name;
   return name;
});


personData.forEach(e=>{
    if(newmap[e.country].continent==='EU'){
        console.log(e);
        console.log(newmap[e.country].emoji);
    }
})