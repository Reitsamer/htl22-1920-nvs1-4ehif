var request = require('request');

const forecast = (latitude, longitude, callback) =>{
    const url = `https://api.darksky.net/forecast/4e6ae4b44da5c15c4d9cd395c54535e3/${latitude},${longitude}?lang=de&units=si`;

    request({url, json: true}, (error, response, body) => {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
        if(error){
            // return console.error('Unable to connect to service')
            callback('Unable to connect to service.', undefined);
            return
        }
        if(response && response.statusCode >= 400){
            // return console.error('Unable to find location.')
            callback('Unable to find location.', undefined);
            return
        }

        //console.log(body.daily.data[0].summary);
        //console.log(`It\'s currently ${body.currently.temperature} degrees out. There is a ${body.daily.data[0].summary}`);

        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        };

        callback(undefined, data)
    })
};

module.exports = forecast;

