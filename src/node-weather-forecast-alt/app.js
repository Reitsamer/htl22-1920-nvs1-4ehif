var request = require('request')
var yargs = require('yargs')
var forecast = require('./forecast')
var { geocode } = require('./geocode')

var location = yargs.argv.location

var ort

var x = async () => {
  try {
    let data = await geocode(location)
    let data2 = await forecast(data.latitude, data.longitude)

    console.log(`Ort: ${data.name}`)
    console.log('Zusammenfassung: ', data2.summary)
    console.log(`Die Temperatur beträgt: ${data2.temperature} Grad Celsius`)
    console.log(`Die Regenwahrscheinlichkeit liegt bei ${data2.rainProbability}%.`)
  } catch (error) {
    console.error(error)
    return
  }
}

x()



