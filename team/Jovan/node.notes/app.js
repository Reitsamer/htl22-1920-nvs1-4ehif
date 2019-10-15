const notes = require('./notes')
const command = process.argv[2]
if(command==="create")
{
    console.log("Creating note...")
    notes.addNote("SHopping", "Go to the Sumermarket")
} else if (command==="read"){
    console.log("Reading note...")
} else if(command==="list"){
    console.log("Listing notes..")
} else if (command==='reomve'){
    console.log("Removing note...")
} else{
    console.error("Unknown command:", command)
}