const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];

console.log(argv);

var title=argv.title;
var body = argv.body;


if(command === 'create'){
    console.log('Creating note...')
    notes.addNote(title,body);
}
else if(command ==='read'){
    console.log('Reading note...')
  var note = notes.getNote(title);
}
else if(command === 'list')
{
    console.log('listing notes');
    var allnotes = notes.getAllNotes();

}else if(command === 'remove')
{
    console.log('Removing notes..')
    notes.removeNotes(title);
}
else
{
    console.error('Unknown command:',command)
}