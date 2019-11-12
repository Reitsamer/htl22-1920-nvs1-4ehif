const argv = require('yargs').argv

const worker = require('./worker')

const command = argv._[0]

const input = argv.input

switch (command) {
  case "print-sorted":
    const sortedPeople = worker.getSortedByName(input)
    if (sortedPeople === undefined) {
      console.error(`Could not perform command '${command}' on input '${input}`)
      return
    }
    sortedPeople.forEach(p => worker.printPerson(p))
    break
  case "find-all":
    const firstname = argv.firstname
    const foundPeople = worker.findAllWithFirstname(input, firstname)
    if (foundPeople === undefined) {
      console.error(`Could not perform command '${command}' on input '${input}`)
      return
    }
    foundPeople.forEach(p => worker.printPerson(p))
    break;
  case "pick-adult":
    const person = worker.pickRandomAdult(input)
    if (person === undefined) {
      console.error(`Could not perform command '${command}' on input '${input}`)
      return
    }
    worker.printAgeOf(person)
    break;
}