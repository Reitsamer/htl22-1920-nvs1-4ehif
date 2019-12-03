var request = require('request')
var yargs = require('yargs')
var forecast = require('./forecast')
var { geocode } = require('./geocode')

var location = yargs.argv.location

geocode(location, (error, { name, latitude, longitude }) => {
  
  if (error) {
    console.error(error)
    return
  }

  forecast(latitude, longitude, (error, { summary, temperature, rainProbability}) => {

    if (error) {
      console.error(error)
      return
    }

    console.log(`Ort: ${name}`)
    console.log('Zusammenfassung: ', summary)
    console.log(`Die Temperatur beträgt: ${temperature} Grad Celsius`)
    console.log(`Die Regenwahrscheinlichkeit liegt bei ${rainProbability}%.`)
  })
})




