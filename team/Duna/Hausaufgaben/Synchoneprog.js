var string ='Das ist ein String';
console.log(string);
var stringarr=[
    'Who',
    'Lets',
    'the',
    'Wolf',
    'Out',
    'Wolf Reitsamer'
]
console.log('Jetzt kommt der string array');
stringarr.forEach(sr=>{
    console.log(sr);
})

var person = {
    firstname: "Wolf",
    lastname: "Reitsamer",
    age:22,
    address: "1190, Hutweidengasse"
}
var person1 = {
    firstname: "Thomas",
    lastname: "Slog",
    age:23,
    address: "Irgendwo in St. Pölten"
}
var person2 = {
    firstname: "Sarah",
    lastname: "Reisig",
    age:21,
    address: "Klosterneuburg"
}

var perarr=[
    person,
    person1,
    person2
]

perarr.forEach(p=>{
    console.log(p)
})
var i=0;
perarr.forEach(p=>{
    i++;
    console.log(`Person${i} Heißt ${p.lastname}, ${p.firstname}`)
})
perarr.sort(function(a, b){
    if(a.lastname < b.lastname) { return -1; }
    if(a.lastname > b.lastname) { return 1; }
    return 0;
})
console.log();
i=0;
perarr.forEach(p=>{
    i++;
    console.log(`Person${i} Heißt ${p.lastname}, ${p.firstname}`)
})