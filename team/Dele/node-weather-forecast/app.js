var request = require('request');
var forecast = require('./forecast')
var { geocode } = require('./geocode')
var yargs=require('yargs')

var longitude
var latitude
var location=yargs.argv.location

geocode(location, (error, {name,latitude,longitude}) => {
    if(error){
        console.error(error)
        return
    }
    console.log(`Ort: ${name}`)
    console.log(`Latitude: ${latitude}`)
    console.log(`Longitude: ${longitude}`)

    
    forecast(latitude, longitude, (error, {summary,temperature, rainProbability}) => {
        if(error){
            console.error(error)
            return
        }
        console.log(`Summary:${summary}`)
        console.log(`Die Temperatur: beträgt${temperature}`)
        console.log(`Rain Probability: ${rainProbability}`)
    })
})





