var request = require("request");

const urlshorten = (url, callback) => {

var options = {
    method: 'POST',
    url: 'https://url-shortener-service.p.rapidapi.com/shorten',
    headers: {
      'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
      'x-rapidapi-key': 'cd7c8648f6mshf5560c7a7445b0bp15b14fjsn5c9b0e55e075',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form: {url: url}
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
    
    callback(undefined, body);
});

}

module.exports = urlshorten