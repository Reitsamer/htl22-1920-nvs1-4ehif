const fs = require('fs')
const _ = require('lodash')
var moment = require("moment");

  const getSortedByName = (input) => {
    if (!fs.existsSync(input)) {
      return undefined
    }
  
    const people = JSON.parse(fs.readFileSync(input))
    
    return _.orderBy(people, ['lastname'], ['asc'])
  }

  const findAllWithFirstName = (input, fn) => {
    var arr = []
    if (!fs.existsSync(input)) {
      return undefined
    }
    const people = JSON.parse(fs.readFileSync(input))

    people.forEach(element => {
      if(_.toUpper(element.firstname).indexOf(_.toUpper(fn)) > -1) {
        arr.push(element)
      }
    });

    return arr
  }

  const pickRandomAdult = (input) => {

    var arr = []
    if (!fs.existsSync(input)) {
      return undefined
    }

    const dat = JSON.parse(fs.readFileSync(input))

    dat.forEach(p => {
      var birthdate = moment(p.dateOfBirth, "DD.MM.YYYY");
      if (!birthdate.isValid()) {
          console.error(`Invalid birthdate of ${p.dateOfBirth}`);
          return;
      }
      const age = moment().diff(birthdate, 'years');
      if (age >= 18) {
        arr.push(p)
      }
  });

  return _.shuffle(arr)[0]
  }

  const printAgeOf = (p) => {
    var birthdate = moment(p.dateOfBirth, "DD.MM.YYYY");
    const age = moment().diff(birthdate, 'years');
    console.log(`${_.toUpper(p.lastname)}, ${p.firstname}, ${age} years`)
  }

  const printPerson = (person) => {
    var birthdate = moment(person.dateOfBirth, "DD.MM.YYYY");
    console.log(`${_.toUpper(person.lastname)}, ${person.firstname}, ${moment(birthdate).format('YYYY-MM-DD')}`)
  }
  

  module.exports = {
    printPerson,
    getSortedByName,
    findAllWithFirstName,
    pickRandomAdult,
    printAgeOf
  }