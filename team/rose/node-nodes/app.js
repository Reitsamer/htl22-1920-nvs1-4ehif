const argv = require('yargs').argv

const notes = require('./notes');

console.log(argv);

const command = (process.argv[2])

const title = 'Shopping';
const body = 'Go to the supermarket';

if (command == 'create')
{
    console.log('Creating note ...');
    notes.addNote(title, body);
}
else if(command == 'read')
{
    console.log('Reading note...')
    notes.getNote(title);
}
else if(command == 'list')
{
    console.log('Listing notes...')
    notes.getAllNotes;
}
else if(command == 'remove')
{
    console.log('Removing notes...')  
    notes.removeNote(title);
}
else
{
    console.error('Unkown command:' ,  command)
}