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
const fs = require('fs')
try {
    const data = fs.readFileSync('persons.db', 'utf8')
    var personData = JSON.parse(data);
  } catch (err) {
    console.error(err)
  }
  personData.forEach(person => {
    console.log(`${person.lastname}, ${person.firstname}`);
});