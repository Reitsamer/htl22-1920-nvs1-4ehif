var request = require('request')

const geocode = (location, callback) => {
  location = encodeURIComponent(location)
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q`

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to service.')
      return
    }

    if (response.body.features.length === 0) {
      callback('Could not find location.', undefined)
      return
    }

    var data = {
      name: response.body.features[0].place_name,
      longitude: response.body.features[0].center[0],
      latitude: response.body.features[0].center[1]
    }

    callback(undefined, data)
  })
}

module.exports = {
  geocode
}