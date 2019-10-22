const argv = require('yargs').argv

const notes = require('./notes')

console.log(argv)

const command = argv._[0]

var title = argv.title
var body = argv.body

//Commands
//node app.js create --title="test" --body="meh"

if(command === 'create') {
    console.log('Creating note...')
    var success = notes.addNote(title, body)
    if(success === true) {
        console.log('Note added successfully.')
    } else {
        console.log('Note with title already exists.')
    }
} else if (command === 'read') {
    console.log('Reading note...')
    var note = notes.getNote(title)
    console.log(note)
} else if (command === 'list') {
    console.log('Listing note...')
    var allNotes = notes.getAllNotes();
    allNotes.forEach(n => console.log(n));
} else if (command === 'remove') {
    console.log('Removing note...')
    console.log(notes.removeNote(title));
} else if (command === 'print') {
    notes.printNote(title);
} else {
    console.error('Unknown command:', command)
}