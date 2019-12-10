var request = require('request')




const forecast = (latitude, longitude, callback) => {
const url = `https://api.darksky.net/forecast/1e12f51f0f315249700d8fd55bc3c074/${latitude},${longitude}`
    request({ json: true, url: url }, (error, response, body) => {
        if (error) {
            //console.error('Unable to connect to service')
            
            // TODO: return error
            callback('Unable to connect to service', undefined)
            return
        }

        if (response && response.statusCode >= 400) {
            //console.error('Unable to find location.')
            
            //return
            callback('Unable to connect to service', undefined)
            return
        }

        //console.log(body.daily.data[0].summary)
        //console.log(`It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability} chance of rain. Overall:`)

        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        }

        // TODO: return data
        callback(undefined, data)
    })
}

module.exports = forecast