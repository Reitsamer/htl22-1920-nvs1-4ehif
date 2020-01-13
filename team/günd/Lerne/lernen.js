//alt shift f = formattieren des codes
var request = require('request');
var yargs = require('yargs').argv;  // ./aus dem File raus, .. für ordner
var _ = require('lodash');
// var moment = require('moment');

//yargs 
// command: node index.js xxx --option=yyy
// xxx: const command = yargs._[0]
// yyy: const option = yargs.option

//Package.json => npm init -y
//Für Testing => npm i --save-dev jest
//In Package.json => "test": "jest"
//Commandozeile "npm test" => jest findet automatisch und führt es aus
// Alle testoptionen => https://jestjs.io/docs/en/asynchronous
    
// body.list.forEach(element => {  //Geht alle 
//     if (element.thumbs_up > maxThumbUp) {
//         elementWithMostLikes = element
//         maxThumbUp = element.thumbs_up
//       }
//     });

//Callback
const geocode = (location, callback) => {
    //location = encodeURIComponent(location)
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoia2luZ3lpZ2kiLCJhIjoiY2sydnFjeXU5MDMxbDNkcGR2djc0N3h4aSJ9.Tvl-3RxoAa4J0ufkFjLzAw`
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.', undefined)
            return
        }
        if (response.body.features.length === 0) { //Errorbedingung überlegen
            callback('Could not find location', undefined)
            return
        }
        var data = { //Alles was zurückgeschickt wird, beim Aufrufen in App.js
            name: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1]
        }
        callback(undefined, data)
    })
}

//Promise
const getCompatibility = (first, second) => {
    return new Promise((resolve, reject) => {
      const options = {
        url: `https://love-calculator.p.rapidapi.com/getPercentage?fname=${first}&sname=${second}`,
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",  //Wird zb Bei Rapidapi verwendet, Host&Key, bei manchen nicht, Angabe
          "x-rapidapi-key": "162925fc19msh3819722ce3f07f1p1bbf4bjsnabbce8997683"
        },
        json: true
      }
    
      request( options, (error, request, body) => {
        if (error) {
          // TODO: deal with error
          reject(error)
          return
        }
  
        if (body.message) {
          reject(body.message)
          return
        }
    
        var result = {
          prozent: body.percentage,
          ergebnis: body.result
        }

        resolve(result)
      })
    })
  }

//Async await
const myAsycLoveFunc = async (firstName, secondName) => {  //Async vor parameter
    try {
      const result = await love.getCompatibility(firstName, secondName) //Await vor methodenaufruf
  
      console.log('Prozent: ' + result.prozent)
      console.log('Text: ' + result.ergebnis)
    } catch (error) {
      console.error("Ooopsy: " + error)
    }
  }



// Methode exportieren
module.exports = {
    calculate, geocode
}