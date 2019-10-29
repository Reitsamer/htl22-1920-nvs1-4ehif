const fs = require('fs');

const fetchAllNotes= () =>{
    try{
    var existingNotes=fs.readFileSync('notes.json')
    return JSON.parse(existingNotes);
    }catch{
        return[];
    }
}

const addNote=(title,body) =>{
var allNotes=fetchAllNotes()
//Variante 1
if(allNotes.findIndex(n=>n.title===title)>-1){
    return true
}
//Variante 2
if(allNotes.filter(n=>n.title===title).length>0){
    return false
}
    var newNote={
    title:title,
    body:body
    }
    allNotes.push(newNote)
    fs.writeFileSync('notes.json',JSON.stringify(allNotes))
}
const getNote=(title) =>{
    //CHALLENGE
    //1.Read all notes
    var allNotes=fetchAllNotes()
    //2.Find note with given title
    var foundNotes=allNotes.filter(n=>n.title===title)
    //3.Return the note
    return foundNotes[0]
    //4.Print the note in app.js
    

}
const getAllNotes=() =>fetchAllNotes()
const removeNote=(title) =>{
    var allNotes=fetchAllNotes()
    var removeNote=allNotes.filter(n=>n.title!==title)
    if(allNotes.length===removeNote.length){
        return false;
    }
    fs.writeFileSync('notes.json',JSON.stringify(removeNote))
    return true
}
const printNote=(title,body)=>{
    var allNotes=fetchAllNotes()
    return console.log(allNotes)
}

module.exports={
    addNote,
    getNote,
    getAllNotes,
    removeNote,
    printNote
}