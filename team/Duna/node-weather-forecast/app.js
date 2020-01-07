var request = require('request')
var forecast = require('./forecast')
var {geocode} = require('./geocode')
var yargs = require('yargs').argv
var location = yargs.location

geocode(location, (error,data)=>{
  console.log("Geocode")
  console.log("Error:",error)
  console.log("Data:",data)
  
  forecast(data.latitude,data.longitude, (error,data)=>{
    console.log("Forecast")
    console.log("Error:",error)
    console.log("Data:",data)
  });
});




