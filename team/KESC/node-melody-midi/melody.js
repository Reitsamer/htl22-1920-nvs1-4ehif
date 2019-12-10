const request = require('request');

const melody = (callback) => {
    const apiURL = 'https://api.noopschallenge.com/melodybot/random';

    request({url: apiURL, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to service.');
            return
        }

        if (response.body.notes.length === 0) {
            callback('Oh, there are no notes. Something went wrong here.');
            return
        }

        callback(undefined, response.body)
    })
};

module.exports = {
    melody
};
