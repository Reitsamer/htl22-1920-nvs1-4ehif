const fs= require('fs');
const fetchAllNotes=()=>{
    try{
    var existingNotes=fs.readFileSync('notes.json')
    

    return JSON.parse(existingNotes)
    }
    catch{
        return []
    }
}
const addNote=(title, body)=>{
    var allNotes=fetchAllNotes();

    if(allNotes.filter(n=>n.title===title).length>0){
        return false
    }

    var newNote={
        title: title,
        body:body,
    }
    allNotes.push(newNote);
    fs.writeFileSync('notes.json',JSON.stringify(allNotes))
    return true;
}

const getNote=(title)=>{
    var allNotes=fetchAllNotes();
    var foundNotes= allNotes.filter(n=>n.title===title)
    return foundNotes[0];
}

const getAllNotes=()=> fetchAllNotes();

const removeNote=(title)=>{
    var allNotes= fetchAllNotes();
    var newlist=allNotes.filter(n=>n.title!==title)
    if(allNotes.length===newlist.length)
    {
        return false
    }
    fs.writeFileSync('notes.json',JSON.stringify(newlist))
    return true
}

const printNote=(title)=>{
    var allNotes=fetchAllNotes();
    var sote=allNotes.filter(n=>n.title===title)
    console.log(`der titel ist ${sote[0].title} und es wird gesagt ${sote[0].body}`)
}

module.exports={
    addNote, 
    getNote,
    getAllNotes,
    removeNote,
    printNote
}