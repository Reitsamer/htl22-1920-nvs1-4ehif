var request = require('request');
var forecast = require('./forecast')
var {geocode} = require('./geocode')
var yargs = require('yargs')

var location = yargs.argv.location

geocode(location, (error, {name, longitude,latitude}) => {
  
  if(error){
    console.error(error)
    return
  }

  forecast(latitude, longitude, (error, {summary,temperature,rainProbability}) => {
    if(error){
      console.error(error)
      return
    }
    console.log(`Ort: ${name}`)
    console.log(`Zusammenfassung: ${summary}`)
    console.log(`Die Temperatur beträgt: ${temperature}`)
    console.log(`Die Regenwahrscheinlichkeit liegt bei ${rainProbability}`)
  })
})



//const url = 'https://api.darksky.net/forecast/222315b9ff1d64787e18e87d47ae63d4/37.8267,-122.4233'

//CHALLENGE:
// summary, temperature, precipProbability
// 1. Print: "It´s currently xxx degrees out. There is a xx% chance of rain."
// 2. Test your work!


//request({url,json:true}, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  //if(error) {
      //return console.error('Unable to connect to service.')
  //}

  //if(response && response.statusCode >= 400){
    //return console.error('Unable to find location')
  //}
  //console.log(body.daily.data[0].summary)
  //console.log(`It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability} chance of rain`)
//});

//Challenge
//1. Fire off a new request to the URL
//2. Parse the request
//3. Print place_name, save longitude & latitude (+print them)
//4. Test your work

//const geocodeURL= "https://api.mapbox.com/geocoding/v5/mapbox.places/Salzburg.json?access_token=pk.eyJ1Ijoia2luZ3lpZ2kiLCJhIjoiY2sydnFjeXU5MDMxbDNkcGR2djc0N3h4aSJ9.Tvl-3RxoAa4J0ufkFjLzAw"
//request({url:geocodeURL,json:true}, (error, response) => {
    //if(error) {
        //return console.error('Unable to connect to service.')
    //}
    //if(response.body.features.length===0){
        //return console.error('Could not find location')
    //}
    //var name =response.body.features[0].place_name
    //console.log('Name:'+ name)
    //var longitude = response.body.features[0].center[0]
    //var latitude = response.body.features[0].center[1]
    //console.log('Longitude:'+longitude)
    //console.log('Latitude'+latitude)
//});