const argv = require('yargs').argv
const chalk = require('chalk')

const converter = require('./converter');

const command = argv._[0]

const input = argv.input
var status

if (command == 'convert')
{
    console.log('Converting Json ...');
    status = converter.convert(input)
    if (status.success === true) {
      console.log(chalk.green('Success.'))
    } else {
      console.log(chalk.red(`Failed: ${status.message}`))
    }
}
else if(command == 'pick')
{
  status = converter.pickRandom(input)
  if (status.success === true) {
    converter.printPerson(status.data)
  } else {
    console.log(chalk.red(`Failed: ${status.message}`))
  }
}
else if(command == 'print')
{
    console.log('Printing Json File ...')
    const sortBy = argv.sortby
    const order = argv.order || 'asc'
    status = converter.getSorted(input, sortBy, order)
    if (status.success === true) {
      status.data.forEach(p => converter.printPerson(p))
    } else {
      console.log(chalk.red(`Failed: ${status.message}`))
    }
}
else
{
    console.error('Unkown command:' ,  command)
}