const argv = require('yargs').argv

const chalk = require('chalk')

const converter = require('./converter')

console.log(argv)

const command = argv._[0]

var input = argv.input
var sortby = argv.sortby
var order = argv.order

const printPerson = (person) => {
    console.log(chalk.blue(`${person.lastname}, ${person.firstname}`))
}

if(command === 'convert') {
    var out = converter.convert(input)
    if(out === false) {
        console.log(chalk.red("Fehler beim einlesen der Datei!"))
    } else {
        console.log(chalk.green("conversion successful"))
        out.forEach(element => {
            printPerson(element)
        });
    }
} else if (command === 'pick') {
    var out = converter.pickRandom(input)
    if(out === false) {
        console.log(chalk.red("Fehler beim einlesen der Datei!"))
    } else {
        console.log(chalk.green("Random pick successful"))
        printPerson(out)
    }
} else if (command === 'print') {
    var out = converter.getSorted(input, sortby, order)
    if(out === false) {
        console.log(chalk.red("Fehler beim einlesen der Datei!"))
    } else if(out === "Fehler") {
        console.log(chalk.red("Fehler beim sortieren der Daten!"))
    } else {
        console.log(chalk.green("Sorting successful"))
        out.forEach(element => {
            printPerson(element)
        });
    }
} else {
    console.error('Unknown command:', command)
}