const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];

var title = argv.title;
var body = argv.body;

if (command === 'create') {
    var successfull = notes.addNote(title, body);
    if (successfull)
        console.log(`Note "${title}" has been added`);
    else
        console.log(`Note "${title}" already exists`);
} else if (command === 'read') {
    var note = notes.getNote(title);
    if (note !== undefined)
        notes.printNote(note);
    else
        console.log(`Node "${title}" does not exist`);
} else if (command === 'list') {
    var allNotes = notes.getAllNotes();
    allNotes.forEach(note => notes.printNote(note));
} else if (command === 'remove') {
    var sucessfull = notes.removeNote(title);
    if (sucessfull)
        console.log(`Note "${title}" has been deleted`);
    else
        console.log(`Note "${title}" does not exist`);
} else
    console.error('Unknown command:', command);