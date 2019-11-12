const chalk = require('chalk');
const argv = require('yargs').argv
var _ = require('lodash');

const converter = require('./converter')

const command = argv._[0]

var input = argv.input


if (command === 'convert'){
    var status = converter.convert(input)
    if(status.success === true)
        console.log(chalk.green('Success'))
    else if (status.success === false)
        console.log(chalk.red(`Error: ${status.message}`))

}else if (command ==='pick'){
    var status = converter.pickRandom(input)
    if(status.success === true){
        converter.printPerson(status.data)
        console.log(chalk.green('Success'))
    }
    else if (status.success === false)
        console.log(chalk.red(`Error: ${status.message}`))
    
}else if (command ==='print'){
    const sortBy = argv.sortby
    const order = argv.order || 'asc'
    status = converter.getSorted(input,sortBy,order)
    if (status.success === true) 
    {
        status.data.forEach(p => converter.printPerson(p))
    } 
    else 
    {
        console.log(chalk.red(`Error: ${status.message}`))
    }
}