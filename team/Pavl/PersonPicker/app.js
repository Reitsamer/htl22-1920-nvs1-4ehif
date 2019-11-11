const argv = require('yargs').argv;
const command = argv._[0];
const conv = require('./converter');
const chalk = require('chalk');

var input = argv.input;
var sortby = argv.sortby;
var order =argv.order;

if(command==="convert"){
   var value= conv.convert(input);
   if(value.success===true){
       console.log(chalk.green('converting was sucess'));
   }
   else{
       console.log(chalk.red(value.message));
   }
    
}
else if(command==="pick"){
  var value = conv.pickRandom(input);
  if(value.success===false){
      console.log(value.message);
  }
  else{
      console.log(value.data);
  }

}else if(command==="print"){
    var value=conv.getSorted(input, sortby, order);
    if(value.success===false){
        console.log(chalk.red(value.message));
    }
    else{
        value.data.forEach(element => {
            conv.printPerson(element);
        });
    }
}
else{
    console.log(chalk.red('Ungültiger Kommando'));
}