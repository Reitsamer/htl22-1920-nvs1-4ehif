//var request = require('request')
var forecast = require('./forecast')
var yargs = require('yargs')
var {geomapping} = require('./geomapping')      // Object-Destructioning 


var location = yargs.argv.location

// Callback-Chaining

 geomapping(location, (error, {name, latitude, longitude}) => {
    if (error) {
        console.error(error)
        return
    }

    // console.log('Geocode-Callback')
    // console.log('Error:', error)
    // console.log('Data:', data)


     //forecast(data.latitude, data.longitude, (error, data) => {
    forecast(latitude, longitude, (error, {summary, temperature, rainProbability}) => {
        if (error) {
            console.error(error)
            return
        }

         console.log('Forecast-Callback')
         console.log('Summary: ', summary)
         console.log('The temperature is:', temperature)
         console.log('Precipitation:' , rainProbability)
     })
 })









//request(url, (error, response, body) => {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
//});