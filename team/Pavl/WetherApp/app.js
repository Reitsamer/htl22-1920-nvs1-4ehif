var request = require('request');
const fs = require('fs');
const forecast = require('./forecast');
const { geocoding } = require('./geocoding')
var yargs = require('yargs')

var latitude
var longtitude

var location = yargs.argv.location;

geocoding(location, (error, data) => {
    location=encodeURIComponent(location);
    console.log('Geocode-Callback')
    console.log('Eroor: ', error);
    console.log('Data: ', data)

    if(error){
        console.log(error);
        return;
    }

    forecast(data.latitude, data.longtitude, (error, data) => {

        if(error){
            console.log(error)
        }

        console.log('Summary: ', data.summary);
        console.log('Die Temperatur beträgt ', data.temperature);
        console.log('Die Regenwahrscheinlichkeit liegt bei ', data.rainProbability)
    })
    
})










const url = 'https://api.darksky.net/forecast/f673c0663d5e123d77959adb0c7e5bb8/37.8267,-122.4233?lang=de&&units=si';

request({ url, json: true }, (error, response, body) => {
    //   console.log('error:', error); 
    //   console.log('statusCode:', response && response.statusCode); 
    //   console.log('body:', body);

    if (error) {
        console.error('Unable to connect to service');
        return
    }

    if (response && response.statusCode >= 400) {
        console.error('Unable to find location.');
        return
    }

    console.log(body.daily.data[0].summary);
    console.log(`it is currently ${body.currently.temperature} degress out. there is a ${body.currently.precipProbability}`)

});






const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Vienna.json?limit=2&access_token=pk.eyJ1IjoiYW5vbnltb3VzMTUwIiwiYSI6ImNrMzVwa3pjajExa3kzY21xYmR2NGNzNDQifQ.R2LJDD2EvOjQTwe0BG9hpw';

request({ url: url2, json: true }, (error, response, body) => {
    if (error) {
        console.error('Unable to connect to service');
        return
    }

    if (response.body.features.length === 0) {
        console.error('Unable to find location.');
        return
    }

    const name = response.body.features[0].place_name;
    const longtitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];

    console.log(name);
    console.log(longtitude)
    console.log(latitude)
});


