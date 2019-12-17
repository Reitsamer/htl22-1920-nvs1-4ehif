var request = require('request');



//CHALLENGE
//
//1.Print: "It´s currently xxx degrees out. There is a xx% chance to rain."
//2.Test your work!

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c1dba800bd0552d23052bc82635f45a5/${latitude},${longitude}?lang=de&units=si`;

    request({ url, json: true }, (error, response, body) => {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response); // Print the response status code if a response was received
        //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
        if (error) {
            callback('Unable to find location.', undefined)
            return
        }
        if (response && response.statusCode >= 400) {
            callback('Unable to find location.', undefined)
            return
        }
        //console.log(body.daily.data[0].summary)
        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        }
        //console.log(`It´s currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability} chance to rain`)
        callback(undefined, data)

    });
    
    
}
module.exports = forecast
