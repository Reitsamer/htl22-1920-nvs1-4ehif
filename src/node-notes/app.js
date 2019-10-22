const argv = require('yargs').argv

const notes = require('./notes')

const command = argv._[0]

var title = argv.title
var body = argv.body

if (command === 'create') {
  var success = notes.addNote(title, body)
  if (success === true) {
    console.log('Note added successfully.')
  } else {
    console.log('Note with that title already exists.')
  }
} else if (command === 'read') {
  var note = notes.getNote(title)
  console.log(note)
} else if (command === 'list') {

  var allNotes = notes.getAllNotes()
  allNotes.forEach(n => console.log(n))
  
} else if (command === 'remove') {
  var success = notes.removeNote(title)
  if (success === true) {
    console.log('Removed note with title:', title)
  } else {
    console.log('Note with that title does not exists.')
  }
} else {
  console.error('Unknown command:', command)
}