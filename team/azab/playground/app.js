const argv = require('yargs').argv

const notes = require('./notes')


const command = argv._[0]

var title = argv.title
var body = argv.body


if (command === 'create'){
    var success = notes.addNote(title, body)
    if(success ===true){
        console.log('Note added successfully')
    }
    else{
        console.log('Note with the title already exists.')
    }
    console.log('Creating note ...')
    notes.addNote(title, body)

}else if (command ==='read'){
    console.log('Reading note ...')
    var note = notes.getNote('Shopping')
    console.log(note)

}else if (command ==='list'){
    var allnotes = notes.getAllNotes()
    console.log(allNotes)
    allnotes.forEach(n => console.log(n))

}else if (command ==='remove'){
    var success = notes.removeNote(title)
    if(success = true){
        console.log('Removed note with title: ',title)
    }
    else{
        console.log('Note with that title does not exist')
    }
}else {
    console.error('Unknown Command: ', command)
}