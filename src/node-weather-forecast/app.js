var request = require('request')

const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/37.8267,-122.4233?lang=de&units=si'

request({ json: true, url: url }, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.

  if (error) {
    console.error('Unable to connect to service.')
    return
  }

  if (response && response.statusCode >= 400) {
    console.error('Unable to find location.')
    return
  }

  console.log(body.daily.data[0].summary)

  console.log(`It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)

})


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
})