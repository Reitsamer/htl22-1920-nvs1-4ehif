const chalk = require('chalk');
var _ = require('lodash');
const argv = require('yargs').argv
const fs = require('fs')

const command = argv._[0]

var input = argv.input
var sortby=argv.sortby
var order=argv.order

const converter = require('./converter')

if (command === 'convert') {
    var putmeout=converter.convert(input)
    if(putmeout.substring(0,11)==="Success = t"){
        console.log(chalk.green(putmeout))
    } else {       
        console.log(chalk.red(putmeout))
    }
} else if(command==='pick'){
    var putmeout=converter.pickRandom(input)
    if(putmeout.substring(0,11)==="Success = t"){
        var splitupboy=putmeout.substring(22)
        process.stdout.write(chalk.green(putmeout.substring(0,22)))
        converter.printPerson(splitupboy)
    } else {       
        console.log(chalk.red(putmeout))
    }
} else if(command==='print'){
    var putmeout=converter.getSorted(input,sortby,order)
    if(typeof putmeout!= String){
        console.log(chalk.green("Success = true, data: "))
        putmeout.forEach(part => {
            converter.printPerson(part)
            });
    } else {       
        console.log(chalk.red(putmeout))
    }
}