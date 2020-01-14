var request = require("request");

const getemails = (command, callback) => {

var data

var options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/%7Bmd5%7D/',
    headers: {
      'x-rapidapi-host': 'privatix-temp-mail-v1.p.rapidapi.com',
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

    data = body
    
    callback(undefined, data);
});

}

module.exports = getemails