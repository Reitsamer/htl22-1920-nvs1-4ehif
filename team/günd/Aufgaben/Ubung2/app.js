const argv = require('yargs').argv

const converter = require ('./converter')

const  command = argv._[0]
var input =argv.input
var sortby=argv.sortby
var order=argv.order

var status

switch(command)
{
    case "convert":
        status = converter.convert(input)
        if(status.success===true)
        {
            console.log(chalk.green('Success.'))
        }
        else
        {
            console.log(chalk.red(`Failed: ${status.message}`))
        }
        break

    case "pick":
        status= converter.pickRandom(input)
        if (status.success === true) 
        {
            converter.printPerson(status.data)
        } 
        else 
        {
            console.log(chalk.red(`Failed: ${status.message}`))
        }
        break

    case "print":

        status = converter.getSorted(input,sortby,order)
        if (status.success === true) 
        {
            status.data.forEach(p => converter.printPerson(p))
        } 
        else 
        {
            console.log(chalk.red(`Failed: ${status.message}`))
        }
        break
}