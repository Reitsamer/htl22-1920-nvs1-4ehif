var forecast = require('./forecast');
var {geocode} = require('./geocode');
var yargs = require('yargs');

var location = yargs.argv.location;
geocode(location, (error, {name, latitude, longitude}) => {
    if(error){
        console.error(error);
        return
    }
    forecast(latitude, longitude, (error, {summary, temperature, rainProbabiity}) => {
        if(error){
            console.error(error);
        }

        console.log('Ort: ',  name);
        console.log('Summary: ', summary);
        console.log(`Die Temperatur liegt bei ${temperature}`);
        console.log(`Die Regenwahrscheinlichkeit liegt bei ${rainProbabiity}`);
    });

});



