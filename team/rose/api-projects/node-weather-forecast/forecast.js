var request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `https://api.darksky.net/forecast/1a1e266a9da39162e22c99eb357ef44d/${latitude},${longitude}?lang=de&units=si`

    request({url, json: true}, (error, response, body) => {

        if (error) {
          
           callback:('Unable to connect to service.', undefined)
           return
        }

        if (response && response.statusCode >= 400) {
        
             callback:('Unable to find location.', undefined)
             return
        }

        console.log(body.daily.data[0].summary)

        var data ={
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.precipProbability
        }

        // ToDo return data
        callback(undefined, data)


    });
}

module.exports = forecast