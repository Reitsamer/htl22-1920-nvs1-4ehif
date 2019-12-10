//alt shift f = formattieren des codes
var request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/222315b9ff1d64787e18e87d47ae63d4/${latitude},${longitude}`
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            //console.error('Unable to connect to service.')

            //Todo: return error
            callback('Unable to connect to service.', undefined)
            return
        }

        if (response && response.statusCode >= 400) {
            //console.error('Unable to find location')

            //Todo: return error
            callback('Unable to find location', undefined)
            return
        }
        //console.log(body.daily.data[0].summary)
        //console.log(`It's currently ${body.currently.temperature} degrees out. 
        //There is a ${body.currently.precipProbability} chance of rain`)

        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        }


        //todo:return data
        callback(undefined, data)
    })
}

module.exports = forecast