var request = require('request')
var yargs = require('yargs')
var forecast = require('./forecast')
var { geocode } = require('./geocode')

var location = yargs.argv.location

var ort
geocode(location)
  .then(({ name, latitude, longitude }) => {
    ort = name
    return forecast(latitude, longitude)
  })
  .then(({summary, temperature, rainProbability}) => {
    console.log(`Ort: ${ort}`)
    console.log('Zusammenfassung: ', summary)
    console.log(`Die Temperatur beträgt: ${temperature} Grad Celsius`)
    console.log(`Die Regenwahrscheinlichkeit liegt bei ${rainProbability}%.`)
  })
  .catch(error => {
    console.error(error)
    return
  })




