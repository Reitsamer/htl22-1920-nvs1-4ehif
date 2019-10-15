const argv = require('yargs').argv

const notes = require ('./notes')

console.log(argv)

//console.log(process.argv[3])
//console.log(process.argv[4])

const  command = argv._[0]

var title =argv.title
var body = argv.body

if(command==='create')
{
    notes.addNote(title,body)
}else if (command ==='read')
{
    var note = notes.getNote(title)
}else if (command === 'list')
{
    var allnotes = notes.getAllNotes();
}else if (command === 'remove')
{
    notes.removeNote(titel)
}else{
    console.error('Unknown command:',command)
}