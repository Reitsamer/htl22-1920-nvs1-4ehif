var request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/${latitude},${longitude}?lang=de&units=si`

  request({ json: true, url: url }, (error, response, body) => {
   if (error) {
      //console.error('Unable to connect to service.')
      
      // TODO: return error
      callback('Unable to connect to service.', undefined)
      return
    }

    if (response && response.statusCode >= 400) {
      //console.error('Unable to find location.')

      // TODO: return error
      callback('Unable to find location.', undefined)
      return
    }

    // console.log(body.daily.data[0].summary)
    // console.log(`It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
 
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
