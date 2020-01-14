var tempmail = require('./tempmail');
var yargs = require('yargs');

var mail = yargs.argv.mail;

tempmail(mail, (error, data) =>{
    if(error){
        console.error(error);
        return
    }
    console.log(data);
});