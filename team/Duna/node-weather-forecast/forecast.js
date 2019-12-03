var request = require('request')
var url = "https://api.darksky.net/forecast/0218f3561af67c7b4511aaf5241ecd04/37.8267,-122.4233?units=si"

const forecast = (latitude, longitude, callback) => {
    url = `https://api.darksky.net/forecast/0218f3561af67c7b4511aaf5241ecd04/${latitude},${longitude}?units=si`

    request(url, (error, response, body) => {

        if (error) {
            // return console.error("Unable to connect to service");
            callback("Unable to cconnect to service", undefined)
            return
        }
        if (response && response.statusCode >= 400) {
            //console.error("unable to find location.")
            //return
            callback("Unable to find location", undefined)
            return
        }
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var data = JSON.parse(body) // Print the HTML for the Google homepage.
        var daily = data.daily;

        var datad = daily.data
        var summary = datad[0].summary
        var Data = {
            summary: summary,
            temperature: data.currently.temperature,
            rainProbabilty: data.currently.precipProbability
        }
        callback(undefined, Data)
    })
}

module.exports= forecast

