var request = require('request')

const geocode = (location, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZnJvc3RiaXQiLCJhIjoiY2szNXBqeTB5MWRjODNkcXVvNXk4bmt4ZyJ9.y7WSX2r81TUBm-5g8skBww`

    request({ url: geocodeURL, json: true }, (error, response) => {

        if (error) {
            callback: ('Unable to connect to service.', undefined)
            return
        }

        if (response && response.statusCode >= 400) {
            callback: ('Unable to find location.', undefined)
            return
        }

        if (response.body.features.length == 0) {
            callback: ('Could not find location.', undefined)
            return
        }

        var data = 
        {
            name: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1]
        }


        callback(undefined, data)

    });
}

module.exports = geocode