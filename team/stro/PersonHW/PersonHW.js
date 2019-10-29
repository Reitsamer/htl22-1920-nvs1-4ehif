//Task 1 -----
var x ='Hello there';

console.log(x);
//Task 2 -----
var stringarray=[
    'Alter','Bro','Kollege'
]
stringarray.forEach(term=>{
    console.log(term);
});
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

    var sortedpersons=person.sort((a,b)=>{
        if(a.vorname>b.vorname){
            return 1;
        }else if(a.vorname<b.vorname){
            return -1;
        }else{
            return 0;
        }
        
    })

person.sort();
person.forEach(persons=>{
    console.log(`Vorname: ${persons.vorname}, Nachname: ${persons.nachname}`);
});
//Task 6 ----
var fs=require('fs');

try 
{
    const data = fs.readFileSync('persons.json', 'utf-8');
    var personData = JSON.parse(data);
    console.log(contents);
}
catch(err) 
{
console.error('Error', err)
}