var request = require("request");

var options = {
  method: 'GET',
  url: 'https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/',
  qs: {id: 'lF-jPBnZ098'},
  headers: {
    'x-rapidapi-host': 'coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com',
    'x-rapidapi-key': 'cb98cd4719mshedaf1da841f638bp1cf53djsn1062377ff246'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});


const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1e12f51f0f315249700d8fd55bc3c074/${latitude},${longitude}`
        request({ json: true, url: url }, (error, response, body) => {
            if (error) {
                callback('Unable to connect to service', undefined)
                return
            }
    
            if (response && response.statusCode >= 400) {
                callback('Unable to connect to service', undefined)
                return
            }

            var data = {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                rainProbability: body.currently.precipProbability
            }
    
            // TODO: return data
            callback(undefined, data)
        })
    }
    
    module.exports = forecast