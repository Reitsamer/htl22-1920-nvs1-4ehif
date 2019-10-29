const argv = require('yargs').argv;
const command = argv._[0];
const conv = require('./converter');
const chalk = require('chalk');

var input = argv.input;
var sortby = argv.sortby;
var order =argv.order;

if(command==="convert"){
   var value= conv.convert(input);
   if(value===true){
       console.log(chalk.green('converting was sucess'));
   }
   else{
       console.log(chalk.red('was not succes'));
   }
    
}
else if(command==="pick"){
  var value = conv.pickRandom(input);
  if(value===false){
      console.log("was not success");
  }
  else{
      conv.printPerson(value);
  }

}else if(command==="print"){
    var value=conv.getSorted(input, sortby, order);
    if(value===false){
        console.log(chalk.red("sorting was not success"));
    }
    else{
        value.forEach(element => {
            conv.printPerson(element);
        });
    }
}
else{
    console.log(chalk.red('Ungültiger Kommando'));
}