const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];

var title = argv.title;
var body = argv.body;

if (command === 'create') {
    notes.addNote(title, body);
} else if (command === 'read') {
    var note = notes.getNote(title);
    console.log(`Title: ${title}\nBody: ${note.body}`);
} else if (command === 'list') {
    var allNotes = notes.getAllNotes();
} else if (command === 'remove') {
    notes.removeNote(title);
} else
    console.error('Unknown command:', command);