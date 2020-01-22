var request = require("request");

// Callback

const getGeoLocation = (loc, callback) => {

var options = {
    method: 'GET',
    url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${loc}`,
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'x-rapidapi-key': 'cd7c8648f6mshf5560c7a7445b0bp15b14fjsn5c9b0e55e075'
    }
  };

request(options, function (error, response, body) {
  
  if (error) {
          
    callback('Unable to connect to service.', undefined)
    return
 }

 if (response && response.statusCode >= 400) {
 
      callback('Unable to get message.', undefined)
      return
 }

    var data = { name: body.powerdBy}
    
    callback(undefined, body);
});

}

// Promise

const getCountryCode = (countrycode) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: `https://restcountries-v1.p.rapidapi.com/alpha/${countrycode}`,
      headers: {
        'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
        'x-rapidapi-key': 'cd7c8648f6mshf5560c7a7445b0bp15b14fjsn5c9b0e55e075'
      },
      json: true
    }
  
    request( options, (error, request, body) => {
      if (error) {
       
        reject(error)
        return
      }

      if (body.message) {
        reject(body.message)
        return
      }
  
      
      resolve(body)
    })
  })
}

module.exports = {
getGeoLocation,
getCountryCode
}