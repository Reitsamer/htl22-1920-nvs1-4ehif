var chucknorris = require('./chucknorris')


chucknorris((error, data) => {
    console.log('Data', data)
    console.log('Error:', error)
    
    if(error) {
        console.error(error)
        return
    }
});