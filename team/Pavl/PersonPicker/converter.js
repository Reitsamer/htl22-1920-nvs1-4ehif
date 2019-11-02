const fs=require('fs');
const os=require('os');

var _ = require('lodash');
const chalk = require('chalk');

const dash = require('yargs').argv;

const convert=(input)=>{

    
    if(!fs.existsSync(input)){
        return {success:false, message: "Not sucess"};
    }
    
    var data=fs.readFileSync(input,'utf-8'); 
   
    data=JSON.parse(data);
    arrayVonObjekten = makeObject(data);
   
    fs.writeFileSync("db.json",JSON.stringify(arrayVonObjekten));
    return {success:true};
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
    
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }
    
      const people = JSON.parse(fs.readFileSync(input))
    
      const shuffledPeople = _.shuffle(people)
      return { success: true, data: shuffledPeople[0] }
   
}

const getSorted=(input,sortBy,order)=>{

    if(!fs.existsSync(input)){
        return  {success: false, message: "not sucess"};
    }

    var data=fs.readFileSync(input,'utf-8');  
    data=JSON.parse(data);

    if(order === "asc"){
        var d= _.sortBy(data, sortBy);
    }else if(order === "desc"){
        var d= _.sortBy(data, sortBy).reverse();
    }


    return {success:true, data: d};
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