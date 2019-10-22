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
    if(out.success === false) {
        console.log(chalk.red(out.message))
    } else {
        console.log(chalk.green(out.message))
        out.data.forEach(element => {
            printPerson(element)
        });
    }
} else if (command === 'pick') {
    var out = converter.pickRandom(input)
    if(out.success === false) {
        console.log(chalk.red(out.message))
    } else {
        console.log(chalk.green(out.message))
        printPerson(out.data)
    }
} else if (command === 'print') {
    var out = converter.getSorted(input, sortby, order)
    if(out.success === false) {
        console.log(chalk.red(out.message))
    } else {
        console.log(chalk.green(out.message))
        out.data.forEach(element => {
            printPerson(element)
        });
    }
} else {
    console.error('Unknown command:', command)
}