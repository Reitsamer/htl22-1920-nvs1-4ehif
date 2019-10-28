const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];


var title=argv.title;
var body = argv.body;


if(command === 'create'){
    console.log('Creating note...')
   var success= notes.addNote(title,body);
   if(success===true){
       console.log('Note addes successfully')
   }else{
       console.log('Note is not added.')
   }
}
else if(command ==='read'){
    console.log('Reading note...')
    var note = notes.getNote(title);
    console.log(note);
}
else if(command === 'list')
{
    console.log('listing notes');
    var allnotes = notes.getAllNotes();
    allnotes.forEach(n=>console.log(n));

}else if(command === 'remove')
{
    console.log('Removing notes..')
    var txt=  notes.removeNotes(title);
    console.log(txt);
}
else
{
    console.error('Unknown command:',command)
}