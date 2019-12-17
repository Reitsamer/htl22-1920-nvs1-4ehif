var request = require('request');

const url="https://api.darksky.net/forecast/d7b6d359b78b879dd0299b5e00a47713/37.8267,-122.4233?lang=de&units=si";

//challenge:

//1. Print: "it's currently xxx degrees out. There is a xx% chance of rain"
//2. test your work

request({url, json:true}, (error, response, body) =>{
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  if(error){
     return console.error("Unable to connect to service")
  }
  if(response && response.statusCode>=400){
      console.error("Unable to finde location")
      return
  }
  console.log(body.daily.data[0].summary)
  console.log(`it's currently ${body.currently} degrees out. There is a ${body.currently.temperature} chance of rain`)
});

const geoCodeuRL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuYWJodXR0byIsImEiOiJjazJ2cWRsd2cwNzZpM2lueDV1YTUxYndiIn0.Kb4ACCh_ErV1DaaL16rf0g";

request({url: geoCodeuRL,json:true}, (error, response, body)=>{
    if(error){
        return console.error("Unable to connect to service")
    }
    if(response.body.features.length===0){
        console.log("Unable to finde location")
        return
    }
     
     const name=body.features[0].place_name
   
     const longitude=body.features[0].center[0]
     const latitude=body.features[0].center[1]

     console.log(`Name: `, name);
     console.log(`longitude `, longitude);
     console.log(`latitude: `, latitude);

})



