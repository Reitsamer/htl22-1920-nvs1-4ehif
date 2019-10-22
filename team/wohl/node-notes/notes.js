const fs = require('fs')
const os = require('os')

const fetchAllNotes = () => {
    try {
    var file = fs.readFileSync('notes.json')
    return JSON.parse(file)
    } catch(err) {
        return []
  }
}

const addNote = (title, body) => {

    var allNotes = fetchAllNotes()

    //Variante 1
    if (allNotes.findIndex(n => n.title === title) > -1) {
        return false;
    }

    //Variante 2
    //if(allNotes.find(n => n.title === title).length > 0) {
    //    return false;
    //}

    var newNote = {
        title: title,
        body: body
    }

    allNotes.push(newNote)

    fs.writeFileSync('notes.json', JSON.stringify(allNotes))
    return true;
}

const getNote = (title) => {
    var allNotes = fetchAllNotes()

    //return allNotes.filter(n => n.title === title)[0]
    return allNotes.find(n => n.title === title)
}

const getAllNotes = () => fetchAllNotes()

const removeNote = (title) => {
    var allNotes = fetchAllNotes()

    var notes = allNotes.filter(n => n.title !== title)
    if(allNotes.length - notes.length > 0) {
        fs.writeFileSync('notes.json', JSON.stringify(notes))
        return "Note found and deleted!"
    } else {
        return "No note found to delete!"
    }
}

const printNote = (title) => {
    console.log(getNote(title))
}

module.exports = {
    addNote,
    getNote,
    getAllNotes,
    removeNote,
    printNote
}