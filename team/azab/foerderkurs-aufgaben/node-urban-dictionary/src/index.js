const urban = require('./urban-dictionary')
const yargs = require('yargs').argv

// node index.js --word=lol

// command: node index.js xxx --option=yyy
// xxx: yargs._[0]
// yyy: yargs.option

const word = yargs.word


urban.getMostLikedExplaination(word, (error, data) => {
    if (error){
        console.error('An error occured' + error)
        return
    }


    console.log(`Thumbs up: ${data.up_votes} - Thumbs down: ${data.down_votes}`)
    console.log(`Description: ${data.text}`)

})