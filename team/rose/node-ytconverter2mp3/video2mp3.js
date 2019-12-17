var request = require("request");


const yt2mp3 = (id, callback) => {

var data
var options = {
    method: 'GET',
    url: 'https://ytapi.p.rapidapi.com/mp3',
    qs: {id: id},
    headers: {
      'x-rapidapi-host': 'ytapi.p.rapidapi.com',
      'x-rapidapi-key': 'cd7c8648f6mshf5560c7a7445b0bp15b14fjsn5c9b0e55e075'
    }
  };

request(options, function (error, response, body) {
	if (error) throw new Error(error);

    data = body
	callback(undefined, data);
});

}

module.exports = yt2mp3