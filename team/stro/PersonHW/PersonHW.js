//Task 1 -----
var x ='Hello there';

console.log(x);
//Task 2 -----
var stringarray=[
    'Alter','Bro','Kollege'
]
console.log(stringarray);
//Task 3 ------

var person=[{  
    vorname: 'Gordon',
    nachname: 'Ramsey',
    postleitzahl: '1222',
    addresse: '1222, Hardeggasse',
    geburtsdatum: '9.6.1988'
},
{  
    vorname: 'Mike',
    nachname: 'Wazowski',
    postleitzahl: '1220',
    addresse: '1220, Hardeggasse',
    geburtsdatum: '9.6.1996'
}

];

//Task 4 -----
person.forEach(persons=>{
    console.log(`Vorname: ${persons.vorname}, Nachname: ${persons.nachname}`);
});
//Task 5 -----
person.sort();
person.forEach(persons=>{
    console.log(`Vorname: ${persons.vorname}, Nachname: ${persons.nachname}`);
});
//Task 6 ----
var fs=require('fs');

var contents = fs.readFileSync('persons.json', 'utf8');
console.log(contents);