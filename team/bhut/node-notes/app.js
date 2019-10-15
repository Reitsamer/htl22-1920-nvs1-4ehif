const argv= require('yargs').argv
const notes= require('./notes');



//console.log(process.argv[3])
//console.log(process.argv[4])
console.log(argv);

const command =argv._[0];
var title= argv.title 
var body=argv.body;

if(command=="create"){
    console.log("Create note...")
    notes.addNote(title,body);
}else if(command=="read"){
    console.log("Read note...")
   var note= notes.getNote(title);
}else if(command=="list"){
    console.log("Listing note...")
    var allNotes=notes.getAllNotes();
}else if(command=="remove"){
    console.log("Remove note...")
    notes.removeNote(title);
}else{
    console.error("Unknown command: ", command)
}
