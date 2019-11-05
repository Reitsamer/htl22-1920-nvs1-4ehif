const lodash= require('lodash');
const chalk= require('chalk');
const fs= require('fs');

const makeObject= (people)=>{
    var data=[];

    people.forEach(p => {
        var parts= lodash.split(p,' ');

        data.push({
            lastname: lodash.toUpper(parts[0]),
            firstname: parts[1]

        })
        
    });

    return data;
}

const convert= (input)=>{
    if(!fs.existsSync(input)){
        return {succsess:false,message:"File does not exist " + input}
    }

    const data= JSON.parse(fs.readFileSync(input));
    fs.writeFileSync("db.json", JSON.stringify(makeObject(data)));

    return {succsess:true}
}

const pickRandom=(input)=>{
    if(!fs.existsSync(input)){
        return {succsess:false,message:"File does not exist " + input}
    }

    var persons= JSON.parse(fs.readFileSync(input))

    var rndperson=lodash.shuffle(persons);

    return {succsess:true, data:rndperson[0]};


}

const getSorted=(input,sortBy,order)=>{
    if(!fs.existsSync(input)){
        return {succsess:false,message:"File does not exist" + input}
    }

    const data=JSON.parse(fs.readFileSync(input))

    return {succsess:true, data: lodash.orderBy(data, [sortBy], [order])}
}

const printPerson=(person)=>{
    console.log(chalk.blue( person.lastname +", "+ person.firstname));
}

module.exports={
    convert,
getSorted,
pickRandom,
printPerson
}