var yargs = require('yargs')
var tempmail = require('./temp-email')

var command = yargs.argv.command


const getemails = async (email) => {
    try
    {
        const result = await tempmail.getemails(email)

        console.log('Emails:');

    }
    catch(error)
    {
        console.error('Ohhh nooo: ' + error)
    }
}


if(command == 'get')
{
    tempmail.getemails(message, (error,data) => {
        console.log('Temp Email:')
        console.log('Error:', error)
        console.log('Data', data)
        
        if(error) {
            console.error(error)
            return
        }
    });
}

