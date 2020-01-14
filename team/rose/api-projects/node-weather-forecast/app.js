var request = require('request')
var forecast = require('./forecast')
var geocode = require('./geocode')
var yargs = require('yargs')

var location = yargs.argv.location

geocode(location, (error,data) => {
    console.log('GeoCode-Callback:')
    console.log('Error:', error)
    console.log('Data', data)
    
    if(error) {
        console.error(error)
        return
    }

forecast(data.latitude, data.longitude, (error,data) =>{
    
    if(error) {
        console.error(error)
        return
    }
    
    console.log('Forecast-Callback:')
    console.log('Error:', error)
    console.log('Data', data)
    
})
})



// ------

const url = "https://api.darksky.net/forecast/1a1e266a9da39162e22c99eb357ef44d/37.8267,-122.4233?lang=de&units=si"

// Challenge
// 1. Print: "It's currently xxx degrees out. There is  xx% chance of rain."
// 2. Test your work!


request({url, json:true}, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.

    if(error)
    {
        return console.error('Unable to connect to service.')
    }

    if(response && response.statusCode >= 400)
    {
        return console.log('Unable to find location.')
    }

    console.log(body.daily.data[0].summary)
    console.log(`It's currently ${body.currently.temperature} degrees out. There is  ${body.currently.precipProbability}% chance of rain.`)
});

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Vienna.json?access_token=pk.eyJ1IjoiZnJvc3RiaXQiLCJhIjoiY2szNXBqeTB5MWRjODNkcXVvNXk4bmt4ZyJ9.y7WSX2r81TUBm-5g8skBww"

// Challenge

// 1. Fire off a new request
// 2. Parse the request
// 3. Print place_name, save longitude & latitude (+print them)
// 4. Test your work

request ({ url: geocodeURL, json:true}, (error, response) => {

    if(error)
    {
        return console.error('Unable to connect to service.')
    }

    if(response && response.statusCode >= 400)
    {
        return console.log('Unable to find location.')
    }

    if(response.body.features.length == 0)
    {
        return console.log('Could not find location.')
    }

    const name = response.body.features[0].place_name
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]

    console.log(name, longitude, latitude)
});

