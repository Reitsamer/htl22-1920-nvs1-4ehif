const request = require('request')
var geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Salzburg.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

// CHALLENGE
//
// 1. Fire off a new request to the URL
// 2. Parse the request
// 3. Print place_name, save longitude & latitude (+print them)
// 4. Test your work
const geocode = (name, callback) => {
    location = encodeURIComponent(name)
    geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q`

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            // console.error('Unable to connect to service.')
            // return
            callback("Unable to connect to service.", undefined)
        }

        if (response.body.features.length === 0) {
            // console.error('Could not find location.')
            // return
            callback("Could not find location.", undefined)
        }

        //   const name = response.body.features[0].place_name
        //   const longitude = response.body.features[0].center[0]
        //   const latitude = response.body.features[0].center[1]
        var Data = {
            name: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1]
        }
        callback(undefined, Data)
        //   console.log('Name:', name)
        //   console.log(`Latitude: ${latitude} -- Longitude: ${longitude}`)
        //   forecast(latitude,longitude, (error,data)=>{
        //     console.log("Forecast")
        //     console.log("Error:",error)
        //     console.log("Data:",data)
        //   });
    })
}
module.exports = {
    geocode
}