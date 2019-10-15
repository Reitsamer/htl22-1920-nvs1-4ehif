const notes = require('./notes')
const argv = require('yargs').argv
console.log(argv)
const command= argv._[0]
var title=argv.title
var body = argv.body

if(command==='create'){
    
    if(notes.addNote(title,body))
    {
        console.log('note was added successfully.')
    }
    else{
        console.log('note already exist')
    }
}else if(command==='read')
{
   var note= notes.getNote(title)
   console.log(note)
    
}else if(command==='list')
{
    var AllNotes= notes.getAllNotes();
    AllNotes.forEach(n => console.log(n));
    
}else if (command==='remove'){
    if( notes.removeNote(title))
    {
        console.log(`note was removed :`,title)
    }else{
        console.log('note could not be found')
    }
    
}
else if (command==='print'){
    notes.printNote(title)
    
}else{
    console.error(`unknown command`,command);
    
}

console.log()