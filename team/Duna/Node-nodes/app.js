const notes = require('./notes')
const argv = require('yargs').argv
console.log(argv)
const command= argv._[0]
var title=argv.title
var body = argv.body

if(command==='create'){
    
    notes.addNote(title,body)
}else if(command==='read')
{
   var note= notes.getNote(title)
    
}else if(command==='list')
{
    var AllNotes= notes.getAllNotes();
    
}else if (command==='remove'){
    notes.removeNote(title);
}else{
    console.error(`unknown command`,command);
    
}

console.log()