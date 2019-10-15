const fs = require('fs')

const fetchAllNotes = () => {
  try {
    var existingNotes = fs.readFileSync('notes.json')
    return JSON.parse(existingNotes)
  } catch {
    return []
  }
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
  // CHALLENGE
  // 1. Read all notes
  var allNotes = fetchAllNotes()

  // 2. Find note with given title
  var foundNotes = allNotes.filter(n => n.title === title)

  // 3. Return the note
  return foundNotes[0] 
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
