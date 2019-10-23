const converter = require('./converter.js')
const argv = require('yargs').argv
const chalk = require('chalk')
console.log(argv)
const command= argv._[0]
var input=argv.input
var sortBy = argv.sortBy
var order=argv.order
if(command==='convert'){
    converter.convert(input)
    
}else if(command==='pick')
{
  var result=  converter.pickRandom(input)
  if(result.success===false)
  {
    console.log(chalk.red(result.message))
  }
  else{
      console.log(chalk.blue(result.data))
  }
    
}else if(command==='print')
{
    //converter.printPerson(input);
    var result = converter.getSorted(input, sortBy, order)
    result.data.forEach(element => {
        console.log(element)
    });
    
}else{
    console.error(`unknown command`,command);
}