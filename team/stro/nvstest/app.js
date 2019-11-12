const argv = require('yargs').argv

const work = require('./worker')

const command = argv._[0]

const input = argv.input
const firstname=argv.firstname;


switch (command) {
    case "print-sorted":
            const sortBy = argv.sortby
            const order = argv.order || 'asc'
            sortedpeople = work.getSortedByName(input,sortBy,order)
            
            sortedpeople.forEach(p => work.printPerson(p))
           
            break
      

    case "find-all":
        sortedpeople=work.findAllWithFirstname(input,firstname)
        
            sortedpeople.forEach(p => work.printPerson(p))
        
        break
    case "pick-adult":

    var adult=work.pickRandomAdult(input)
    work.printAgeOf(adult)
    break
    }
    
