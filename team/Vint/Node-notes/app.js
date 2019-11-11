const argv = require('yargs').argv

const notes = require('./notes')

console.log(argv)


const command = process.argv[2]

const command = argv._[0]

var title= argv.title
var body = argv.body



if (command === 'create') {
    console.log('Creating note ... ')
    notes.addNote(title, body)
}else if (command === 'read') {
    console.log('Reading node ... ')
    var note = notes.getNote(title)
}else if (command=== 'list'){
    console.log('Listing notes ... ')  
    var allNotes = notes.getAllNotes() 
}else if (command === 'remove') {
    console.log('Removing ... ')
    notes.removeNote(title)
}else{

}
/*
npm init macht package.json
install mahcht ka 
npm install wenn man von anderen ein project hold und was vergessen hat
*/