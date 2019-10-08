const notes = require('./notes')

const command= process.argv[2]
var title='shopping'
var body = 'go to the supermarket'

if(command==='create'){
    
    notes.addNote(title,body)
}else if(command==='read')
{
    notes.getNote(title)
    
}else if(command==='list')
{
    notes.getAllNotes();
    
}else if (command==='remove'){
    notes.removeNote(title);
}else{
    console.error(`unknown command`,command);
    
}

console.log()