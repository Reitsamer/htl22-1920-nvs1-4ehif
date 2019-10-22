const argv = require('yargs').argv;
const chalk = require('chalk');

const conv = require('./converter');

const command = argv._[0];

const input = argv.input;
const sortby = argv.sortby;
const order = argv.order;

if (command === 'convert') {
    // Convert full names into first and last name
    if (typeof input === 'undefined') {
        console.error(chalk.bgRedBright.black('No input file specified!'));
        process.exit(1);
    }
    var con = conv.convert(input);
} else if (command === 'pick') {
    // Print a random person
} else if (command === 'print') {
    // Print all people, include sortby and order args
} else
    console.error('Unknown command:', command);