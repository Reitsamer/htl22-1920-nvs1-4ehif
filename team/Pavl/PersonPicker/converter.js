const fs=require('fs');
const os=require('os');

var _ = require('lodash');
const chalk = require('chalk');

const dash = require('yargs').argv;

const convert=(input)=>{

    try{
        var data=fs.readFileSync(input,'utf-8'); 
    }catch(err){
        console.log("Ungültiges Dokument");
        return;
    }
     
    data=JSON.parse(data);
    arrayVonObjekten = makeObject(data);

    if(arrayVonObjekten!==0){
        fs.writeFileSync("db.json",JSON.stringify(arrayVonObjekten));
        return true;
    }
    else{
        return false;
    }
}

const makeObject = (people)=>{
    var arrayVonObjekten=[];

    people.forEach(element => {
    var split1=_.split(element," ");
    var surname=_.toUpper(split1[0]);
    arrayVonObjekten.push(
        {
            lastname:surname,
            firstname:split1[1]

        }
      )
   });
    return arrayVonObjekten;
}

const pickRandom=(input)=>{
    try{
        var data=fs.readFileSync(input,'utf-8');  
    }
    catch(err){
        //Exception handling
    }
   
    data=JSON.parse(data);

    var rnd=_.shuffle(data);

    if(rnd.length>0){
        return rnd[0];
    }

    return false;
   
}

const getSorted=(input,sortBy,order)=>{
    var data=fs.readFileSync(input,'utf-8');  
    data=JSON.parse(data);

    if(order === "asc"){
        var d= _.sortBy(data, sortBy);
    }else if(order === "desc"){
        var d= _.sortBy(data, sortBy).reverse();
    }
    if(d.length>0){
         return d;
    }
    
    return false;
   
}

const printPerson=(person)=>{
    console.log(chalk.blue("lastname: "+ person.lastname +",     firstname "+ person.firstname));
}


module.exports={
convert,
pickRandom,
getSorted,
printPerson
};