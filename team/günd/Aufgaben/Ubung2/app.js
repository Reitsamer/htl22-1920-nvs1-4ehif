const argv = require('yargs').argv

const converter = require ('./converter')

const  command = argv._[0]
var input =argv.input
var sortby=argv.sortby
var order=argv.order

if(command ==='convert')
{  
   var success= converter.convert(input)
   console.log(success)
}
else if (command === 'pick')
{
    var success = converter.pickRandom(input)
    console.log(success)
}
else if(command === 'print')
{
    var success = converter.getSorted(input,sortby,order)
}
else{
    console.error('Unknown command:',command)
}