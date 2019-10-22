const notes = require('./notes')
const argv = require('yargs').argv


// if(command === 'create'){
//     console.log('Creating note ....');
// } else if (command === 'read'){
//     console.log('Reading note ....');
// } else if (command === 'remove'){
//     console.log('Removing note ....');
// } else {
//     console.error('Unknown command: ', command);
// }


const command = argv._[0]

var title = argv.title
var body = argv.body

switch (command) {
    case 'create':
        notes.addNote(title, body)
        break;
    case 'read':
        var note = notes.getNote(title)
        console.log(note);
        break;
    case 'list':
        var allNotes = notes.getAllNotes()        
    case 'remove':
        notes.removeNote(title)
    default:
        console.error('Unknown command: ', command)
        break;
}