const fs = require('fs')
const _ = require('lodash')
const moment = require('moment')


const getSortedByName = (input) => {
  try {
    var data = JSON.parse(fs.readFileSync(input))
    return _.orderBy(data, ['lastname'], ['asc'])
  } catch {
  }
}

const printPerson = (person) => {
  var convertedDate = moment(person.dateOfBirth, 'DD.MM.YYYY')
  console.log(`${_.toUpper(person.lastname)}, ${person.firstname}, ${convertedDate.format('YYYY-MM-DD')}`)
}

const findAllWithFirstname = (input, firstname) => {
  try {
    var data = JSON.parse(fs.readFileSync(input))
    return data.filter(p => _.toLower(p.firstname).includes(_.toLower(firstname)))
  } catch {
  }
}

const pickRandomAdult = (input) => {
  try {
    var data = JSON.parse(fs.readFileSync(input))
    var adults = data.filter(p => {
      var convertedDate = moment(p.dateOfBirth, 'DD.MM.YYYY')
      return moment().diff(convertedDate, 'years') >= 18
    })
    return _.shuffle(adults)[0]
  } catch {
  }
}

const printAgeOf = (person) => {
  var convertedDate = moment(person.dateOfBirth, 'DD.MM.YYYY')
  console.log(`${_.toUpper(person.lastname)}, ${person.firstname}: ${moment().diff(convertedDate, 'years')} years`)
}

module.exports = {
  getSortedByName,
  printPerson,
  findAllWithFirstname,
  pickRandomAdult,
  printAgeOf
}