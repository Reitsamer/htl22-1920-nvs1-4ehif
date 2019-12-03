var request = require('request')
const url="https://api.darksky.net/forecast/0218f3561af67c7b4511aaf5241ecd04/37.8267,-122.4233?units=si"
var forecast = require('./forecast')
forecast(37.8267,-122.4233, (error,data)=>{
  console.log("Forecast")
  console.log("Error:",error)
  console.log("Data:",data)
});


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Salzburg.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

// CHALLENGE
//
// 1. Fire off a new request to the URL
// 2. Parse the request
// 3. Print place_name, save longitude & latitude (+print them)
// 4. Test your work

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.error('Unable to connect to service.')
    return
  }

  if (response.body.features.length === 0) {
    console.error('Could not find location.')
    return
  }

  const name = response.body.features[0].place_name
  const longitude = response.body.features[0].center[0]
  const latitude = response.body.features[0].center[1]

  console.log('Name:', name)
  console.log(`Latitude: ${latitude} -- Longitude: ${longitude}`)
  forecast(latitude,longitude, (error,data)=>{
    console.log("Forecast")
    console.log("Error:",error)
    console.log("Data:",data)
  });
})