const chalk = require('chalk');
const argv = require('yargs').argv
var _ = require('lodash');
const fs = require('fs');



const convert = (input) => {

    try{
        var allpeople = fs.readFileSync(input)
        allpeople = JSON.parse(allpeople)
        allpeople = makeObject(allpeople)
        fs.writeFileSync('db.json', JSON.stringify(allpeople))

        return {success: true}
    }catch {
        return {success: false, message: `File '${input}'  does not exist`}
    }
}



const makeObject = (people) => {

    var arrayOfObjects = []
    try{
        people.forEach(student => {
            var a = _.split(student, ' ')
            var person = {
                lastname: _.toUpper(a[0]),
                firstname: a[1]
            }
            arrayOfObjects.push(person)

        });
        return arrayOfObjects

    }
    catch {
        return []
    }
    
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
        return {success: false, message: `File '${input}'  does not exist`}    
    }
}
//getSorted(input, sortBy, order)
const getSorted = (input, sortBy, order) => {
    try
    {
        var allPeople = JSON.parse(fs.readFileSync(input))
        allPeople = _.orderBy(allPeople, sortBy, order)
        return {success:true,data:allPeople[0]}
    }
    catch
    {
        return {success: false, message: `File '${input}'  does not exist`}    
    }
}

const printPerson = (person) => {
    console.log(chalk.blue(person.lastname, person.firstname))
}


module.exports = {
    convert,
    pickRandom,
    getSorted,
    printPerson
}