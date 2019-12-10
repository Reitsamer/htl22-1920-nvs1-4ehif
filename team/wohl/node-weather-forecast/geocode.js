const request = require('request')

//const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Vienna.json?access_token=pk.eyJ1IjoiZXJpay13b2hscmFiIiwiYSI6ImNrMzVuNnk1MjA2ZHkzYnM0M2VhYmUwY2wifQ.FWw6aC4D5Fyuxlocv6JO6Q'

const geocode = (location, callback) => {
    location = encodeURIComponent(location)
    geocodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZXJpay13b2hscmFiIiwiYSI6ImNrMzVuNnk1MjA2ZHkzYnM0M2VhYmUwY2wifQ.FWw6aC4D5Fyuxlocv6JO6Q`


    request({ url: geocodeurl, json: true }, (error, response) => {

        if (error) {
            //return console.error('Unable to connect to service.')
            callback('Unable to connect to service.')   //callback('Unable to connect to service.', undefined) ist das selbe
            return
        }

        if (response.body.features.length === 0) {
            //return console.error('Unable to find location.')
            callback('Unable to find location.')
            return
        }

        //var name = response.body.features[0].place_name
        //var longitude = response.body.features[0].center[0];
        //var latitude = response.body.features[0].center[1];

        var data = {
            name : response.body.features[0].place_name,
            longitude : response.body.features[0].center[0],
            latitude : response.body.features[0].center[1]
        }

        //console.log('Name:', name)
        //console.log('Longitude:', longitude)
        //console.log('Latitude:', latitude)
        callback(undefined, data)
    })
}

module.exports = {
    geocode
}