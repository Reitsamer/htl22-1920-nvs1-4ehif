const fs = require('fs')

const fetchAllNotes = () => {
    try{
        var existingNotes = fs.readFileSync('notes.json')
        return JSON.parse(existingNotes)
    } catch{
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
    /*
    CHALLENGE
    1. Read all notes
    2. Find note with given title
    3. Return the note
    4. Print the note in app.js
    */
    var allNotes = fetchAllNotes() // 1.
    var foundNotes = allNotes.filter((note) => title === note.title); // 2
    

    return foundNotes[0]; // 3.
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