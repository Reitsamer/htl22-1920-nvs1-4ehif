var yargs = require('yargs')
var brainshopAI = require('./brainshopAI')

var message = yargs.argv.message



brainshopAI(message, (error,data) => {
    console.log('Brainshop AI:')
    console.log('Error:', error)
    console.log('Data', data)
    
    if(error) {
        console.error(error)
        return
    }
});