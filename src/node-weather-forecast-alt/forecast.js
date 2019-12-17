var request = require('request')

const forecast = (latitude, longitude) => {
  const url = `https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/${latitude},${longitude}?lang=de&units=si`

  return new Promise((resolve, reject) => {
    request({ json: true, url: url }, (error, response, body) => {
    if (error) {
        reject('Unable to connect to service.')
        return
      }

      if (response && response.statusCode >= 400) {
        reject('Unable to find location.')
        return
      }

      var data = {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        rainProbability: body.currently.precipProbability
      }

      resolve(data)
    })
  })
}

module.exports = forecast
