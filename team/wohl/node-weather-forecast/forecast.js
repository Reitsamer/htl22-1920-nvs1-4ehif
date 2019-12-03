const request = require('request')

//const url = 'https://api.darksky.net/forecast/ccff31803f5a383120bdd10fb12e31b8/,?lang=de&units=si'

// Challenge:
//
// 1. Print: "It's currently xxx degrees out. There is a xx% chance of rain."
// 2. Print: "Test your work!

const forecast = (latitude, longitude, callback) => {

    url = `https://api.darksky.net/forecast/ccff31803f5a383120bdd10fb12e31b8/${latitude},${longitude}?lang=de&units=si`

    request({ url, json: true }, (error, response, body) => {

        //console.log('error', error)

        if (error) {
            //return console.error('Unable to connect to service.')
            

            //  TODO: return error
            callback('Unable to connect to service.')
            return
        }

        if (response && response.statusCode >= 400) {
            //return console.error('Unable to find location.')

            //  TODO: return error
            callback('Unable to find location.')
            return
        }
        
        //console.log('statusCode:', respone && response.statusCode)
        //console.log(body.daily.data[0].summary)
        //console.log(`It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)

        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        }


        callback(undefined, data)
    })
}

module.exports = forecast