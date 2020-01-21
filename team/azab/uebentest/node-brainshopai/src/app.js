const yargs = require('yargs').argv
const ai = require('./brainshopai')


const msg = yargs.word


ai.getAnswerFromAI(msg, (error, data) => {
    if(error){
        console.log('An error occured.')
    }

    console.log(data.talking)
})