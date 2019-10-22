const argv= require('yargs').argv
const notes= require('./notes');
//console.log(process.argv[3])
//console.log(process.argv[4])

const command =argv._[0];
var title= argv.title 
var body=argv.body;

if(command=="create"){
    var success=notes.addNote(title,body);
    if(success===true){
        console.log("Note addes")
    }else{
        console.log("Note with title exists")
    }
}else if(command=="read"){
   var note= notes.getNote(title);
   console.log(note)
}else if(command=="list"){
    var allNotes=notes.getAllNotes();
    allNotes.forEach(n => 
        console.log(n)
        );
}else if(command=="remove"){
    
    //1.implement remove note using filter
    //2.print in app.js if not has been removed
    var success=notes.removeNote(title);
    if(success===true){
        console.log("Removed note with line...")
    }else{
        console.log("Note could not be removed")
    }
}else{
    console.error("Unknown command: ", command)
}
