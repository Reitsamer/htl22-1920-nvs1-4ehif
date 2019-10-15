const notes = require("./notes") //Ein modul hat immer ein leeres Object was es zurückliefert

const argv = require("yargs").argv;
console.log(argv);

const command = argv._[0]

var title = argv.title;
var body = argv.body;


if(command === "create")
{
    console.log("Creating note...")
    notes.addNote(title, body)
}
else if(command === "read...")
{
    console.log("Reading note...")
   var note = notes.getNote(title)
}
else if (command === "list")
{
    console.log("Listing notes")
    var allnotes = notes.getAllNotes()
}
else if(command === "remove")// einfaches =zuweisung == vergleich mit Konventierung === glecheit vom Wert und Typ
{
    console.log("Removing note...")
    notes.removeNote(title)
}
else
{
    console.error("Uknown command!:",command)
}