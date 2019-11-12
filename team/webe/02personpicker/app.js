const argv = require('yargs').argv;
const chalk = require('chalk');

const conv = require('./converter');

const command = argv._[0];

if(command === 'convert') {
    var output = conv.convert(input);
    if(output.success === false) {
        console.log(chalk.red(output.message));
    } else {
        console.log(chalk.green(output.message));
        output.data.forEach(element => {
            conv.printPerson(element);
        });
    }
} else if (command === 'pick') {
    var output = conv.pickRandom(input);
    if(output.success === false) {
        console.log(chalk.red(output.message));
    } else {
        console.log(chalk.green(output.message));
        conv.printPerson(output.data);
    }
} else if (command === 'print') {
    var output = conv.getSorted(input, sortby, order);
    if(output.success === false) {
        console.log(chalk.red(output.message));
    } else {
        console.log(chalk.green(output.message));
        output.data.forEach(element => {
            conv.printPerson(element);
        });
    }
} else {
    console.error('Unknown command:', command);
}