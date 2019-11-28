const worker = require('./worker.js')
const argv = require('yargs').argv
//console.log(argv)
const command= argv._[0]
var input=argv.input
var firstname = argv.firstname
if(command==='print-sorted'){
   var status= worker.getSortedByName(input);
   if(status.success==false){
    console.log(status.message)
   }
   
   status.data.forEach(element => {
       worker.printPerson(element)
    
});
   
 }else if(command==='find-all')
 {
    var status=worker.findAllWithFirstname(input,firstname);
    if(status.success==false)
    {
        console.log(status.message)
    }
     
    status.data.forEach(element => {
        worker.printPerson(element)
    }); 
 }else if(command==='pick-adult')
 {
    var status= worker.pickRandomAdult(input);
    if(status.success==false)
    {
        console.log(status.message)
    }
    //war nur zum überprüfen
    //console.log(status)
    worker.printAgeOf(status)
    
     
 }else{
     console.error(`unknown command`,command);
 }