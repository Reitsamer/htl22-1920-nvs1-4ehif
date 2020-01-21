const converter = require('./converter')
const argv = require('yargs').argv
const chalk = require('chalk');

var command = argv._[0]
var input = argv.input
var sortby = argv.sortby
var order = argv.order

switch (command) {
    case 'convert':
        var output = converter.convert(input)
        
        if(output.success){
            console.log(chalk.green('Success'));
        }
        else
            console.log(chalk.red(`Failed:, ${status.message}`));
        break;
    case 'pick':
        var output = converter.pick(input)
        
        if(output.success){
            console.log(chalk.green(output));
        }
        else
            console.log(chalk.red(output));
        break;
    case 'print':
        var output = converter.print(person)
        
        if(output.success){
            console.log(chalk.green(output));
        }
        else
            console.log(chalk.red(output));
        break;    
    default:
        console.error('Unknown command: ', command)
        break;
}

