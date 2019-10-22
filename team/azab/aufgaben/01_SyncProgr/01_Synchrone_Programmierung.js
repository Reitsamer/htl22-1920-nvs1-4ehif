// 1
console.log()
var a = 'Aufgabe 1 - Hallöchen'
console.log(a)

// 2
console.log()
console.log('Aufgabe 2')
var b = ['Meow','Miao','Nyaa','Wuff']
console.log(b)

// 3.1

console.log()
console.log('Aufgabe 3 - Das Anlegen von Objekten und diese in einer Array einfügen')
var chopin = new Object()
var tschaikowsky = new Object()
var rachmaninov = new Object()


tschaikowsky = {
    vorname: 'Pjotr Iljitsch',
    nachname: 'Tschaikowsky',
    plz: 1234,
    adresse: 'Kamsko-Wotkinski Sawod 456',
    gebd: ('1840-05-07')
}

chopin = {
    vorname: 'Fredericke',
    nachname: 'Chopin',
    plz: 1234,
    adresse: 'Warschau 123',
    gebd: ('1810-03-01')
}

rachmaninov = {
    vorname: 'Sergei Wassiljewitsch',
    nachname: 'Rachmaninov',
    plz: 1234,
    adresse: 'Nowgorod 789',
    gebd: ('1873-03-20')
}

// 3.2
var c = [tschaikowsky, chopin, rachmaninov]

// 4
console.log()
console.log('Aufgabe 4 - Template String ... (Backticks ` )')
c.forEach(element => {
    console.log(`${element.nachname}, ${element.vorname}`)
});


console.log()
console.log('Aufgabe 5 - Sortieren')
// 5 - Erweiterung von Punkt 4
c.sort(function(a,b){
    if(a.nachname > b.nachname){
        return 1;
    }
    else if(a.nachname < b.nachname){
        return -1;
    }
})

c.forEach(element => {
    console.log(`${element.nachname}, ${element.vorname}`)
});

console.log()

// 6 
console.log()
console.log('Aufgabe 6 - Einlesen einer Datei und zu einem Objekt konvertieren')


const fs = require('fs');

const data = fs.readFileSync('persons.db', (err, data) => { 
    if (err) throw err; }) 
    
var persons = JSON.parse(data);



