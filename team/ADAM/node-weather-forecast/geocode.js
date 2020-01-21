var request = require('request');


const geocode = (location, callback) =>{
    location = encodeURI(location);
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic3hyaXB0IiwiYSI6ImNrMzVuYWM4ejFjcHMzZHF1ZHZ6cHc4dG8ifQ.zlqTE8ZeYAzQxHbs0Siwcw`;

    request({ url: geocodeURL, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to service.', undefined);
            return
        }
        if(response.body.features.length === 0){
            callback('Unable to find location.', undefined);
            return
        }
        var data = {
            name: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1],
        };

        callback(undefined, data);
    });

};

module.exports = {
    geocode
};