const argv = require('yargs').argv;
const notes = require('./notes');

const command = argv._[0]

var title = argv.title;
var body = argv.body;

if(command==='create'){
    console.log('Creating note...');
    notes.createNote(title,body);
} else if(command==='read'){
    console.log('Reading note...');
    var note = notes.getNote(title)
} else if(command==='list'){
    console.log('Listing note...');
    var note = notes.getAllNote();
} else if(command==='remove'){
    console.log('Removing note...');
    notes.removeNote(title);
} else{
    console.error('Unknown command:',command);
}