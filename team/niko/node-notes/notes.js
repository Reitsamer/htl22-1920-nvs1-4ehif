const fs = require("fs")

const fetchAllNotes = () =>
{
  try{
    var existinNotes = fs.readFileSync("notes.json")
    return JSON.parse(existinNotes) // parse to javascript
  }catch{
    return []
  }
} 



const addNote = (title,body) => 
{
  var allNotes = fetchAllNotes()

  var newNote ={
    title : title,
    body : body
  }

  allNotes.push(newNote) // add 

  fs.writeFileSync("notes.db",JSON.stringify(allNotes)) 
}
const getNote = (title) =>
{
// Read all notes 
// Find note with given title
// Return the note 
//Print the note in app.js
}
const getAllNotes = () =>  //Funktionen
{

}
const removeNote = (title) =>
{

}

module.exports = { //Was möchte ich alles expotiern
addNote,
getAllNotes,
getNote,
removeNote
}