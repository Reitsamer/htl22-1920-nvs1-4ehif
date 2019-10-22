const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];

const title = argv.title;
const body = argv.body;
let successful;

if (command === 'create') {
    successful = notes.addNote(title, body);
    if (successful)
        console.log(`Note "${title}" has been added`);
    else
        console.log(`Note "${title}" already exists`);
} else if (command === 'read') {
    const note = notes.getNote(title);
    if (note !== undefined)
        notes.printNote(note);
    else
        console.log(`Node "${title}" does not exist`);
} else if (command === 'list') {
    const allNotes = notes.getAllNotes();
    allNotes.forEach(note => notes.printNote(note));
} else if (command === 'remove') {
    successful = notes.removeNote(title);
    if (successful)
        console.log(`Note "${title}" has been deleted`);
    else
        console.log(`Note "${title}" does not exist`);
} else
    console.error('Unknown command:', command);