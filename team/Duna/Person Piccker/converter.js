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
const convert=(input)=>{
    var jsonlist;
    if (!fs.existsSync(input)) {
        return {success:false, message: `${input}+ file not found` }
      }
      jsonlist= fs.readFileSync(input)
    
    var Stringlist= JSON.parse(jsonlist)
    Stringlist.forEach(name=>{
        console.log(name)
    })
    makeObject(Stringlist)
    fs.writeFileSync('db.json',JSON.stringify(Stringlist))
    return {success:true};
}
var Names=[];
const makeObject=(input)=>{
    input.forEach(namen=>{
        var gesplittet= ls.split(namen,' ')
        gesplittet= "{ lastname: \"" +ls.toUpper(gesplittet[0]) +"\", firstname: \""+gesplittet[1]+"\" }"
        Names.push(gesplittet) 
    })
    Names.forEach(gs=>{
        console.log(gs)
    })
    return Names
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
    
    if(arr===false)
    {
        return false;
    }
    if(sortBy === "firstname") {
        if(order === "asc") {
           
        } else {
           
        }
    } else {
        if(order === "asc") {
            
        } else {
            
        }
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