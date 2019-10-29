const _ = require('lodash')
const chalk = require('chalk')

const fs = require('fs')

const makeObject = (people) => {
  var data = []

  people.forEach(p => {
    var parts = _.split(p, ' ')
    console.log(parts)
    data.push({
      lastname: _.toUpper(parts[0]),
      firstname: parts[1]
    })
  })

  return data
}

const pickRandom = (input) => {
  if (!fs.existsSync(input)) {
    return { success: false, message: `File does not exists: ${input}` }
  }

  const people = JSON.parse(fs.readFileSync(input))

  const shuffledPeople = _.shuffle(people)
  return { success: true, data: shuffledPeople[0] }
}

const convert = (input) => {
  if (!fs.existsSync(input)) {
    return { success: false, message: `File does not exists: ${input}` }
  }

  const data = JSON.parse(fs.readFileSync(input))
  fs.writeFileSync('db.json', JSON.stringify(makeObject(data)))

  return { success: true }
}

const printPerson = (person) => {
  console.log(chalk.blue(`${person.lastname}, ${person.firstname}`))
}

const getSorted = (input, sortBy, order) => {
  if (!fs.existsSync(input)) {
    return { success: false, message: `File does not exists: ${input}` }
  }

  const data = JSON.parse(fs.readFileSync(input))
  return { success: true, data: _.orderBy(data, [sortBy], [order]) }
}

module.exports = {
  convert,
  pickRandom,
  printPerson,
  getSorted
}