const fs = require('fs');

const fetchAllNotes=()=>{
    try{
        var existingNotes=fs.readFileSync('notes.json');
        return JSON.parse(existingNotes)
    }catch{
        return []
    }
   
}

const addNote =(title,body) =>{
    var allNotes=fetchAllNotes()
    //Variante 1
    if(allNotes.findIndex(n=>n.title===title)>-1){
        return false;
    }

    //Variante 2
    //if(allNotes.filter(n=>n.title===title).length>0){
    //    return false
    //}

    var newNote={
        title:title,
        body:body
    }
    allNotes.push(newNote)

    fs.writeFileSync("notes.json", JSON.stringify(allNotes));
    return true;
}

const getNote=(title)=>{
    //1. Read all notes
    var allNotes=fetchAllNotes()
    //2. Find note with given title
    var foundNotes=allNotes.filter(n=>n.title===title)
    //3. Return the note
    return foundNotes[0]
    //4. Print the note in app.js
    // console.log(notes) in app.js
    

}
const getAllNotes=()=> {
    return fetchAllNotes()

}
const removeNote=(title)=>{
    var allNotes=fetchAllNotes()
    var notes=allNotes.filter(n=>n.title!==title);

    if(allNotes.length===notes.length){
        return false
    }

    fs.writeFileSync("notes.json",JSON.stringify(allNotes))


}

// 1. write new function print note
//2. print note gets a note & prints it to the console

const printNote=(title,body)=>{
    var allNotes=fetchAllNotes()
    fs.writeFileSync("notes.json",JSON.stringify(allNotes));
    
}

module.exports={
    addNote,
    getNote,
    getAllNotes,
    removeNote
}