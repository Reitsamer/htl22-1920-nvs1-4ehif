var yargs = require('yargs')
var urlshorten = require('./urlshorten')

var url = yargs.argv.url



urlshorten(url, (error, body) => {
    
    if(error) 
    {
        console.error(error)
        return
    }
           
    console.log('URL SHORTEN:')

    console.log('URL Normal: ', url)

    var short 

    short = body.split('"')

    var regex = '/\\/g';

    console.log('URL Short: ', short[3].replace(regex, '/'))

    console.log('Error:', error)
});