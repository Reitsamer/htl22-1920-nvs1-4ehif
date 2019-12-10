var request = require("request");

const chucknorris = (callback) =>{


  var options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': 'cb98cd4719mshedaf1da841f638bp1cf53djsn1062377ff246',
      accept: 'application/json'
    }
  };
  
  
      request(options, (error, response, body) => {
        if (error) {
            
          callback('Unable to connect to service.', undefined)
          return
        }
  
        if (response && response.statusCode >= 400) {
   
        callback('Unable to get message.', undefined)
        return
        }      
          callback(undefined, body)
        })

}


      //export
      module.exports = chucknorris

