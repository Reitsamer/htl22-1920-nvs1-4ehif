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
  var newNote = {
    title: title,
    body: body
  }

  fs.writeFileSync('notes.db', JSON.stringify(newNote))
}

const getNote = (title) => {
  var allNotes = fetchAllNotes()
  var foundNotes = allNotes.filter(n => n.title === title)
  return foundNotes[0] 
}

const getAllNotes = () => {
    var allNotes = fetchAllNotes()
    return allNotes
}

const removeNote = (title) => {
    var allNotes = fetchAllNotes()
    var foundNotes = allNotes.filter(n => n.title !== title)
    if(allNotes.length==foundNotes.length){
        console.log("Nothing got removed.")
    }
    else{
        fs.writeFileSync('notes.db', JSON.stringify(foundNotes))
        console.log("Something got removed.")
    }
   
}
const printNote= (title) => {
    var allNotes = fetchAllNotes()
    var foundNotes = allNotes.filter(n => n.title === title)
    console.log(foundNotes[0])
  }

module.exports = {
  addNote,
  getNote,
  getAllNotes,
  removeNote,
  printNote
}
