const argv = require('yargs').argv

const notes = require('./notes');

console.log(argv);

//const command = (process.argv[2])

//const title = 'Shopping';
//const body = 'Go to the supermarket';


const command= argv._[0]
var title=argv.title
var body = argv.body

if (command == 'create')
{
    console.log('Creating note ...');
    var success = notes.addNote(title, body)
  if (success === true) 
  {
    console.log('Note added successfully.')
  } 
  else 
  {
    console.log('Note with that title already exists.')
  }
}
else if(command == 'read')
{
    console.log('Reading note...')
    var note = notes.getNote(title)
    console.log(note)
}
else if(command == 'list')
{
    console.log('Listing notes...')
    var allNotes = notes.getAllNotes()
    allNotes.forEach(n => console.log(n))
}
else if(command == 'remove')
{
    console.log('Removing notes...')  
   var success = notes.removeNote(title);
   if(success === true)
   {
       console.log('Removed note with title: ', title);
   }
   else
   {
       console.log('Note with that title does not exist.')
   }
}
else
{
    console.error('Unkown command:' ,  command)
}