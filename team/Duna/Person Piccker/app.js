const converter = require('./converter.js')
const argv = require('yargs').argv
console.log(argv)
const command= argv._[0]
var input=argv.input
var sortBy = argv.sortBy
var order=argv.order
if(command==='convert'){
    converter.convert(input)
    
}else if(command==='pick')
{
    converter.pickRandom(input)
  
    
}else if(command==='print')
{
    //converter.printPerson(input);
    var result = converter.getSorted(input, sortBy, order)
    if(result.success === false) {
        
    } else {
        
    }
    
}else{
    console.error(`unknown command`,command);
}