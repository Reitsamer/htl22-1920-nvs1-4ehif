const fs = require('fs');

const fetchAllNotes = () => {
    try {
        var existingNotes = fs.readFileSync('notes.json')       
        return JSON.parse(existingNotes)
    }
    catch
    {
        return []
    }
}

const addNote =  (title, body) => {
    var allNotes = fetchAllNotes()

    var newNote = {
        title: title,
        body: body,
    }
    
    allNotes.push(newNote)

    fs.writeFileSync('notes.json', JSON.stringify(allNotes))
}

const getNote =  (title) => {
 //Challenge
 // 1. Read all notes
 // 2. Find note with given titel
 // 3. Return the note
 // 4. Print the note in app.js
}

const getAllNote =  () => {

}

const removeNote =  (title) => {

}

module.exports = {
    createNote: addNote,
    getNote,
    getAllNote,
    removeNote,
}