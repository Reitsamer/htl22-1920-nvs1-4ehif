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
        if(success === true){
            console.log('Note addded successfullly.');
        } else{
            console.log('Note with the title already exists');
        }
        break;
    case 'read':
        var note = notes.getNote(title)
        console.log(note);
        break;
    case 'list':
        var allNotes = notes.getAllNotes()
        allNotes.forEach(n => console.log(n));
        break; 
    case 'remove':
        var success = notes.removeNote(title)
        if(success === true){
            console.log('Removed note with title: ', title);
        } else {
            console.log(not.title + ' doesn\'t exist');
        }
        break;
    case 'print':
        notes.printNote(title)
        break;
    default:
        console.error('Unknown command: ', command)
        break;
}