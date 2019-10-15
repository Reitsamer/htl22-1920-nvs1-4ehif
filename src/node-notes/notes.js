const fs = require('fs')

const fetchAllNotes = () => {
  var existingNotes = fs.readFileSync('notes.json')
  return JSON.parse(existingNotes)
}

const addNote = (title, body) => {
  var allNotes = fetchAllNotes()

  var newNote = {
    title: title,
    body: body
  }
  
  allNotes.push(newNote)

  fs.writeFileSync('notes.json', JSON.stringify(allNotes))
}

const getNote = (title) => {

}

const getAllNotes = () => {

}

const removeNote = (title) => {

}

module.exports = {
  addNote,
  getNote,
  getAllNotes,
  removeNote
}
