var request = require('request');

const geocode = (location, callback) => {
    const geocodeurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZWR2YXJkZGVsZWdhbiIsImEiOiJjazM1cGthYWgwMGRjM21vMmk5ZGliMjV4In0.GaoHuvS33fZLcZi0-LOq2A`

        //CHALLENGE
        //
        //1. Fire off a new request to the URL
        //2. Parse the request
        //3. Print place_name, save longitude & latitude(+print them)
        //4. Test your work

        request({ url: geocodeurl, json: true }, (error, response, body) => {
            if (error) {
                callback('Unable to find location.', undefined)
                return
            }
            if (response.body.features.length === 0) {
                callback('Unable to find location.', undefined)
                return
            }
            if (response && response.statusCode >= 400) {
                callback('Unable to find location.', undefined)
                return
            }
            var data = {

                name: response.body.features[0].place_name,
                long: response.body.features[0].center[0],
                lati: response.body.features[0].center[1]
            }

            callback(undefined, data)


        });
    }
    module.exports={
        geocode
    }