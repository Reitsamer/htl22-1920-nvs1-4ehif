var _ = require('lodash');
const chalk = require('chalk');
const fs = require('fs')

const convert = (input) => {

    try {
        var content = fs.readFileSync(input);
        content = JSON.parse(content);

        var data = JSON.stringify(makeObject(content))
        fs.writeFileSync('db.json', data)
    } catch (error) {
        return{success: false, message: 'File does not exist'}
    }

    return {success: true}
}

const makeObject = (people) => {
    var allPerson = []
    
    people.forEach(p => {
        var person = _.split(p, ' ');
        person[0] = _.toUpper(person[0])
        allPerson.push({
            lastname: person[0],
            firstname: person[1]
        })
    });

    return allPerson
}

const pickRandom = (input) => {
    try {
        var personF = fs.readFileSync(input);
        var person = _.shuffle(JSON.stringify(personF))
    } catch (error) {
        return { success: false, message: "File doesn't exist" }
    }

    return { success: true, data: person[_.random(person.length - 1)] }
}   

const getSorted = (input, sortBy, order) => {
    try {
        if(_.toLower(order) != 'asc' || _.toLower(order) != 'desc')
            return { success: false, message: `Wrong order: ${order}` }
        if(_.toLower(sortBy) != 'firstname' || _.toLower(sortBy) != 'lastname')
            return { success: false, message: `Wrong sort by: ${sortBy}` }

        var personFile = fs.readFileSync(input);
        personFile = JSON.parse(personFile)

        var sortedPerson = _.orderBy(personFile, sortBy, order)

    } catch (error) {
        return { success: false, message: "File doesn't exist" }
    }

    return { success: true, data: sortedPerson }
}

const printPerson = (person) => {
    console.log(chalk.blue(person.lastname, ', ', person.firstname));
}

module.exports = {
    convert,
    pick: pickRandom,
    getSorted,
    print: printPerson
}