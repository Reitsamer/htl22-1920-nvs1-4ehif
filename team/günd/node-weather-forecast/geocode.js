var request = require('request')


const geocode = (location, callback) => {
    location = encodeURIComponent(location)
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoia2luZ3lpZ2kiLCJhIjoiY2sydnFjeXU5MDMxbDNkcGR2djc0N3h4aSJ9.Tvl-3RxoAa4J0ufkFjLzAw`
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            //console.error('Unable to connect to service.')
            callback('Unable to connect to service.', undefined)
            return
        }
        if (response.body.features.length === 0) {
            //console.error('Could not find location')
            callback('Could not find location', undefined)
            return
        }
        //var name = response.body.features[0].place_name
        //var longitude = response.body.features[0].center[0]
        //var latitude = response.body.features[0].center[1]
        //console.log('Name:'+ name)
        //console.log('Longitude:'+longitude)
        //console.log('Latitude'+latitude)
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