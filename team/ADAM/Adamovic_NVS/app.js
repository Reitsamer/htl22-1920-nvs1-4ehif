const argv = require('yargs').argv

const worker = require('./worker')

const command = argv._[0]

const input = argv.input

switch (command) {
  case "print-sorted":
    var sortedPerson = []
    sortedPerson = worker.getSortedByName(input)
    if(sortedPerson !== undefined){
        sortedPerson.forEach(p => {
            worker.printPerson(p)
        });
    }
    break;
  case "find-all":
    const firstname = argv.firstname;
    var foundPerson = [];
    foundPerson = worker.findAllWithFirstname(input, firstname);
    if(foundPerson !== undefined){
        foundPerson.forEach(p => {
            worker.printAgeOf(p)
        });
    }
    break;
  case "pick-adult":
      var x = worker.printAgeOf(worker.pickRandomAdult(input))
      if(x !== undefined){
        worker.printAgeOf(worker.pickRandomAdult(input))
      }
    break;
}