const fs= require('fs');
const ls = require('lodash');
const fetchAllPersons=(input)=>{
    try{
    var existingNotes=fs.readFileSync(input)
    

    return JSON.parse(existingNotes)
    }
    catch{
        return []
    }
}
var Names=[];
const makeObject = (input) => {
    var people = [];
    input.forEach((name) => {
        var split = ls.split(name, " ");
        var person = {
            lastname: ls.toUpper(split[0]),
            firstname: split[1]
        };
        people.push(person);
    })
    console.log(people)
    return people;
}
const convert= (input) => {
    if (!fs.existsSync(input)) {
        return {success:false, message: `${input}+ file not found` }
    }
    var jsonlist = fs.readFileSync(input)
    
    var Stringlist= JSON.parse(jsonlist)
    Stringlist.forEach(name=>{
        console.log(name)
    })
    makeObject(Stringlist)
    fs.writeFileSync('db.json',JSON.stringify(Stringlist))


    return {success:true};
}
const pickRandom=(input)=>{

    var arr=fetchAllPersons(input)
    if(arr===false)
    {
        return {success:false,message:`either the ${input} file could not be found or there were no datas saved there, so a random person could not be picked`}
    }
    else
    {
        var shuffeledarr=ls.shuffle(arr)
        return{success:true,data:shuffeledarr[0]}
    }
    
    
}

const getSorted=(input, sortBy, order)=>{
    var stringlist=fetchAllPersons(input)
    var arr=makeObject(stringlist);
    
    
    var sorted;
    if(sortBy === "firstname") {
        if(order === "asc") {
             sorted = arr.sort((a, b) => a.firstname.localeCompare(b.firstname));
        } else {
            sorted = arr.sort((a, b)=>b.firstname.localeCompare(a.firstname));
        }
    } else {
        if(order === "asc") {
             sorted = arr.sort((a,b)=>a.lastname.localeCompare(b.lastname));
        } else {
             sorted=arr.sort((a,b)=>b.lastname.localeCompare(a.lastname));
        }
    }
    return {
        data:sorted
    }
   
}

const printPerson=(input)=>{
    var allNotes=fetchAllPersons(input);
    var sote=allNotes.filter(n=>n.lastname===input)
    console.log(`der titel ist ${sote[0].input} und es wird gesagt ${sote[0].body}`)
}

module.exports={
    convert, 
    pickRandom,
    getSorted,
    printPerson
}