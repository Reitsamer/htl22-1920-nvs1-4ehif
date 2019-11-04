const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')

const convert = (input) => {
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }

    var allPeople = fs.readFileSync(input)
    allPeople = JSON.parse(allPeople)
    allPeople = makeObject(allPeople)
    fs.writeFileSync('db.json',JSON.stringify(allPeople))
    return {success:true}
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
 
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }

    var allPeople = JSON.parse(fs.readFileSync(input))
    allPeople = _.shuffle(allPeople)
    return {success:true,data:allPeople[0]}
    
 
}

const getSorted= (input,sortby,order) => {
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }
    var allPeople = JSON.parse(fs.readFileSync(input))
    return {success:true, data:_.orderBy(allPeople,[sortby],[order])}
}

const printPerson= (person) => {
        console.log(chalk.blue(`${person.lastname},  ${person.firstname}`))

}

module.exports={
    convert, pickRandom,getSorted,printPerson
}