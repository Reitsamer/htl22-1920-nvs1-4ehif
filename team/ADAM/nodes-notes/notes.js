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

    // Variante 2
    if(allNotes.filter(n => n.title === title).length > 0) {
        return false;
    }
    var newNote = {
        title: title,
        body: body
    }
    allNotes.push(newNote)

    fs.writeFileSync('notes.json', JSON.stringify(allNotes))
    return true;
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

const getAllNotes = () => fetchAllNotes()

const removeNote = (title) => {
        /*
    CHALLENGE
    1. implement 'removeNote' (using filter)
    2. print in 'app.js' if not has been removed
    */
    var allNotes
    var filtered = fetchAllNotes().filter(n => n.title !== title)
    fs.writeFileSync('notes.json', JSON.stringify(filtered))

    return filtered.length === fetchAllNotes().length;
}

const printNote = (title) => {
    var notes = fetchNotes().filter(n => n.title === title)
    console.log(notes[0]);
}
module.exports = {
    addNote,
    getNote,
    getAllNotes,
    removeNote,
    printNote
}