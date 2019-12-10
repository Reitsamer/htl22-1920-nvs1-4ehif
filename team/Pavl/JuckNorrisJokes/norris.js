var request = require("request");


const joke = (callback)=>{

    var options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key': '647a53f8e8mshc3765b99272eb13p108d50jsnd289d2b54665',
          accept: 'application/json'
        }
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        data = JSON.parse(body);
        callback(undefined,data);
    });

}

module.exports={
    joke
}



