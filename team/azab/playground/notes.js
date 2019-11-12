const fs = require('fs')

const fetchAllNotes = () => {
    try{
        var existingNotes = fs.readFileSync('notes.json')
        return JSON.parse(existingNotes)
    }
    catch {
        return []
    }
    
}


const addNote = (title, body) => {
    var allNotes = fetchAllNotes()

    // Variante 1
    if(allNotes.findIndex(n=>n.title===title) > -1){
        return false
    }

    // Variante 2
    if(allNotes.filter(n=>n.title===title).length > 0)

    var newNote ={
        title: title,
        body: body
    }
    allNotes.push(newNote)
    fs.writeFileSync('notes.json', JSON.stringify(allNotes))
    return true
}

const getNote = (title) => {
    // CHALLENGE 
    // 1. Read all notes
    var allNotes = fetchAllNotes()


    // 2. Find note with given title
    var foundNotes = allNotes.filter(n => n.title === title)

    // 3. Return the note
    return foundNotes[0]

    // 4. Print the note in app.js

}

const getAllNotes = () => {
    return fetchAllNotes()
}

const removeNote = (title) => {
    var allNotes = fetchAllNotes()
    var remainingNotes = !allNotes.filter(n => n.title === title)

    if(allNotes.lenght === remainingNotes.lenght){
        return false
    }

    fs.writeFileSync('notes.json', JSON.stringify(remainingNotes))
    return true
}

// 1. Write new function 'printNote' 
// 2. printNote gets a note & prints it to the console


module.exports = {
    addNote,
    getNote,
    getAllNotes,
    removeNote
}