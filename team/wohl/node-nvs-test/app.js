const argv = require('yargs').argv

const worker = require('./worker')

const command = argv._[0]

const input = argv.input

switch (command) {
    case "print-sorted":
        status = worker.getSortedByName(input)
        if (status !== undefined) {
          status.forEach(p => worker.printPerson(p))
        } else {
          console.log(`Failed: undefined`)
        }
      break
    case "find-all":
        const firstname = argv.firstname
        status = worker.findAllWithFirstName(input, firstname)
        if (status !== undefined) {
          status.forEach(p => worker.printPerson(p))
        } else {
          console.log(`Failed: undefined`)
        }
      break;
    case "pick-adult":
        status = worker.pickRandomAdult(input)
        if (status !== true) {
          worker.printAgeOf(status)
        } else {
          console.log(`Failed: undefined`)
        }
        break
  }