var request = require('request')

// CHALLENGE
//
// 1. Fire off a new request to the URL
// 2. Parse the request
// 3. Print place_name, save longitude & latidude (+print them)
// 4. Test your work.

const geomapping = (placename, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${placename}.json?access_token=pk.eyJ1Ijoia2FiYW5lcmlyYXkiLCJhIjoiY2szNW43Zm54MTB4cTNkbXF2azJwZHpsayJ9.7A7m3yeQP6JNPCZc1vGIqA`

    request({ json: true, url: geocodeURL }, (error, response) => {
        if (error) {
            //console.error('Unable to connect to service') 
            callback('Unable to connect to service', undefined)
            //return
        }

        if (response.body.features.length === 0 && response.statusCode >= 400) {
            //console.error('Unable to find location.')
            callback('Unable to find location', undefined)
            //return
        }
        var data = {
            placename: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1]
        }

        callback(undefined, data)
        //console.log(`Place Name: ${placename}, Longitude: ${longitude}, Latitude: ${latitude}`)

    })
}

module.exports = {
    geomapping
}