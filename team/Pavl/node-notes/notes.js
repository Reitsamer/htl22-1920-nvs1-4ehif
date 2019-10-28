const fs=require('fs');
const os=require('os');


const fetchNotes =()=>{
    try{
        var existingNotes = fs.readFileSync('notes.json');
        return JSON.parse(existingNotes);
    }catch{
        return[];
    }
}

const addNote=(title,body) => {
var allNotes=fetchNotes();

    if(allNotes.filter(n=>n.title===title).length>0){
        return false;
    }

 var newNote={
    title:title,
    body:body
 };

 allNotes.push(newNote);
 fs.writeFileSync("notes.json",JSON.stringify(allNotes));
 return true;
}

const getNote = (title) => {
    var readNotes=fetchNotes();
    
  var foundNotes = readNotes.filter(n=>n.title===title);

    return foundNotes[0];
}


const getAllNotes = () => {
    return fetchNotes();
}

const removeNotes = (title) => {
    var readNotes=fetchNotes();
    
    var filterd=readNotes.filter(n=>n.title!==title);
    fs.writeFileSync("notes.json",JSON.stringify(filterd));
    
    if(readNotes.length===filterd.length){
        return 'wurde nicht gelöscht';
    }else
    {
        return 'wurde gelöscht';
    }
}

const printNote=(title,body)=>{
    console.log('Title: ', title,' Body: ', body)
}

module.exports={
    addNote,
    getNote,
    getAllNotes,
    removeNotes,
    printNote
};