// 1. Lege einen String an und gib ihn auf der Konsole aus
var name = "Marcel";
console.log(name);

//2. Lege ein String-Array an und gib alle Elemente auf der Konsole aus

var names = [
    "Ana",
    "Bella",
    "Clara",
    "Dorathea",
    "Elise"
]
names.forEach(names => {
    console.log(names);
});

//3. Lege ein Array von Objekten an.
//Jedes Objekt soll eine Person beschreiben (Vorname, Nachname, Postleitzahl, Adresse,Geburtsdatum)

var objects = [

    perosn1 = {
        name: "Lena",
        nachName : "Blume",
        plz : 1220,
        adresse: "Blumenweg 7",
        geb : "2000/02/30"
        },
    perosn2 = {
        name: "Ella",
        nachName : "Löwe",
        plz : 1220,
        adresse: "Löwenzahnweg 12",
        geb : "2000/02/3"
    },

    perosn3 = {
        name: "Ana",
        nachName : "Kirsche",
        plz : 1220,
        adresse: "Kirschenweg 12",
        geb : "2000/11/3"
    }
]

//4. Gib alle Personen deines Arrays im Format "Nachname, Vorname" aus. (Verwende einen
// template-string dafür)

neames.forEach(p =>{
 console.log(`${p.name}, ${p.nachName}`);
}
    )

// 5. Erweitere Punkt 4 dahingehend, dass die Personen alphabetisch sortiert ausgegeben werden

for (var i=0;i < objects.length; i++)
{
    var sortedPeople = objects.sort( (a,b) => {
        if(a.name > b.name) return 1;
        else if(b.name > a.name) return -1;
        else return 0;
    })
}
console.log(sortedPeople)


const fs = require('fs');

try{
    const data = fs.readFileSync("personen.db","uft-8")
    var persomData = JSON.parse(data);
}
catch(err)
{
    console.log("Fail")
    console.log(err);
}
persomData.forEach(person => {
    console.log(object)
})