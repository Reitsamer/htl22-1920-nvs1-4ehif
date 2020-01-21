var request = require('request');
var yargs = require('yargs').argv;  
var _ = require('lodash');
var moment = require('moment');


var countries = require('./countries')


const command = yargs._[0]

const inputpar = yargs.inputpar

console.log("Command: " + command)

console.log("InputPar: " + inputpar)


// Callback

// node .\app.js getGeoLocation --inputpar 'New York'

if(command == 'getGeoLocation')
{
    countries.getGeoLocation(inputpar,  (error,data) => {
        console.log('getGeoLocation:')
        console.log('Error:', error)
        console.log(data)
        
        if(error) 
        {
            console.error(error)
            return
        }
    });
}

// Promise

if(command === 'getCountryCode') {
    prom.funcwithpromise(input1)
    .then(result => {
        console.log(`result: ${result.text}`)
        return
    })
    .catch(error => {
        console.error(error)
        return
    })

}
