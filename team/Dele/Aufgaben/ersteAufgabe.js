var text='Hello'
console.log(text);

var textArray=[
    'First text',
    'Second text',
    'Third text',
    'Fourth text',
    'Fifth text',
    'Sixth text',
    'Seventh text',
    'Eigth text',
    'Ninth text',
    'Tenth text'
];
console.log(textArray);

var firstPerson={
    firstname:'Sana',
    lastname:'Bhutto',
    plz:'1220',
    address:'Wagramerstraße',
    birthdate:'19-12-2000'
};
var secondPerson={
    firstname:'Edvard',
    lastname:'Delegan',
    plz:'2301',
    address:'Haydngasse',
    birthdate:'24-10-2000'
};
var thirdPerson={
    firstname:'Eric',
    lastname:'Strobl',
    plz:'1220',
    address:'Hardeggasse',
    birthdate:'05-01-2002'
};
var fourthPerson={
    firstname:'Marcel',
    lastname:'Satora',
    plz:'1220',
    address:'Sophie-Scholl-Gasse',
    birthdate:'23-12-1999'
};
var personArray=[
    firstPerson,
    secondPerson,
    thirdPerson,
    fourthPerson
];

personArray.forEach(person=>{
    console.log(`${person.firstname},${person.lastname}`);
})
console.log();

personArray.sort(function (x,y) {
    if(x.lastname>y.lastname){
        return 1;
    }
    else if(x.lastname<y.lastname){
        return -1;
    }
    else return 0; 
});
personArray.forEach(person => {
    console.log(`${person.firstname}, ${person.lastname}`);

});

const fs=fs.require('fs');
try{
    const data=fs.readFileSync('persons.json','utf-8')
    var personData=JSON.parse(data)

}catch{
    console.error('Error:',error)
}