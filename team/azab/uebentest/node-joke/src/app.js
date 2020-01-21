const joke = require('./joke')
const yargs = require('yargs')

joke.getJoke( (error, result) => {
    if(error){
        console.error('An error occured' + error)
        return
    }

    console.log(result.joke)

})