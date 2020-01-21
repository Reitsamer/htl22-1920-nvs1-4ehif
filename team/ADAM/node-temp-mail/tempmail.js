var request = require('request');
var data;

const options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/%7Bmd5%7D/',
    headers: {
        'x-rapidapi-host': 'privatix-temp-mail-v1.p.rapidapi.com',
        'x-rapidapi-key': '12f65dd427mshdccee955266164cp1d1555jsn9245e2827661'
    }
};


const tempmail = (options, callback) => {

    request({options, json: true}, (error, response, body) => {
        if(error){
            callback('Unable to connect to service.', undefined);
            return
        }
        if(response && response.statusCode >= 400){
            callback('Unable to create email.', undefined);
            return
        }

        data = body;

        callback(undefined, data)
    })
};

module.exports = tempmail;