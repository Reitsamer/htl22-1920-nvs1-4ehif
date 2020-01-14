const _ = require('lodash')
const fs = require('fs')
const moment = require('moment')

const getSortedByName = (input) => {
    var data = []
    if (!fs.existsSync(input)) {
        return undefined
      }

        data = JSON.parse(fs.readFileSync(input))

      data = _.orderBy(data, ['firstname'], ['asc'])

      return data
}

const printPerson = (person) => {
    // var birthday = moment(person.dateOfBirth).format("YYYY-MM-DD")

    var birthday = moment(person.dateOfBirth, "DD.MM.YYYY").format("YYYY-MM-DD")
    console.log(`${person.lastname}, ${person.firstname}, ${birthday}`)
}

const findAllWithFirstname = (input, firstname) => {
    var data = []
    var foundPersons = []
    if (!fs.existsSync(input)) {
        return undefined
    }
    
      data = JSON.parse(fs.readFileSync(input))
      var name
      data.forEach(p => {
        name = p.firstname.toLowerCase()
        if(name.includes(firstname.toLowerCase())){
            foundPersons.push(p)
        }

        return foundPersons
      });
} 

const printAgeOf = (person) => { 
    var age = moment().diff(person.dateOfBirth, 'years')
    console.log(`${person.lastname}, ${person.firstname}, ${age} years`)
}

const pickRandomAdult = (input) => {
    var olderPersons = []
    if (!fs.existsSync(input)) {
        return undefined
    }

    data = JSON.parse(fs.readFileSync(input))

    data.forEach(p => {
        var age = moment().diff(p.dateOfBirth, 'years') 

        if(age >= 18){
            olderPersons.push(p)
        }
    });

    const shuffledPerson = _.shuffle(olderPersons)
    return shuffledPerson[0]
}

module.exports = {
    getSortedByName,
    printPerson,
    findAllWithFirstname,
    printAgeOf,
    pickRandomAdult
}