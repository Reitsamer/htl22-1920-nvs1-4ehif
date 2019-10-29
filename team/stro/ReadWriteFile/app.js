const argv=require('yargs').argv

const notes=require('./notes');


//console.log(process.argv[3])
//console.log(process.argv[4])

const command=argv._[0]
var title=argv.title
var body=argv.body

if(command==="create"){
    var success=notes.addNote(title,body)
    if(successs===true){
        console.log('Note added successfully')
    }
    else{
        console.log('Note with title already exists')
    }
}else if (command==='read'){
   var note=notes.getNote(title)
   console.log(note)
}else if(command==='list'){
    var allNotes=notes.getAllNotes()
    allNotes.forEach(n => console.log(n))
}else if (command==='remove'){
    var successs=notes.removeNote(title)
    if(successs===true){
        console.log('Removed note with title:',title)
    }
    else{
        console.log('ssssssssssssssss')
    }
}
else if(command==='print'){
    notes.printNote(title,body)

}else{
    console.error('Unknown command:', command);
}