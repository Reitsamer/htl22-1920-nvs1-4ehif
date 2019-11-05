const fs = require('fs')

const addNote = (title, body) => {
    var newNote = {
        title: title,
        body: body
    }
    fs.writeFileSync('notes.db', JSON.stringify(newNote))
}

const getNote =(title)=>{

}

const getAllNotes =()=>{

}

const removeNote =(title)=>{

}
module.exports ={
    create: addNote,
    getNote,
    getAllNotes,
    removeNote
}
// java? function removeNote(){}