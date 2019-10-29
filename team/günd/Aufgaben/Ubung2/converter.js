const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')

const convert = (input) => {
    try{
        var allPeople = fs.readFileSync(input)
        allPeople = JSON.parse(allPeople)
        allPeople = makeObject(allPeople)
        fs.writeFileSync('db.json',JSON.stringify(allPeople))
        return {success:true}
    }
    catch
    {
        return {success:false,message: `File '${input}' does not exist`}
    }
}


const makeObject = (people) =>{
    var allPeopleObject = [];
    people.forEach(n => {
        var person = _.split(n,' ')
        person[0] = _.toUpper(person[0]);
        allPeopleObject.push({
            lastname : person[0],
            firstname : person[1]
        })
    });
    return allPeopleObject
}

const pickRandom = (input) => {
    try
    {
        var allPeople = JSON.parse(fs.readFileSync(input))
        allPeople = _.shuffle(allPeople)
        return {success:true,data:allPeople[0]}
    }
    catch
    {
        return {success:false,message: `File '${input}' does not exist`}
    }
}

const getSorted= (input,sortby,order) => {
   try
   {
       var allPeople = JSON.parse(fs.readFileSync(input))
       allPeople= _.orderBy(allPeople,sortby,order)
       return {success:true, data:allPeopleSorted}
   }
   catch
   {
       return {success:false, message:'There was an error'}
   }
}

const printPerson= (person) => {

    person.forEach(n=>{
        console.log(chalk.blue(`${n.lastname} : ${n.firstname}`))
    })
}

module.exports={
    convert, pickRandom,getSorted
}