var request = require('request');

const directions = (count, callback) => {
    const directionUrl = `https://api.noopschallenge.com/directbot?count=${count}&width=1000&height=1000&connected=1`;
    request({url: directionUrl, json: true}, (error, response) => {

        if (error) {
            //console.error('Unable to connect to service.');
            callback('Unable to connect to service');
            return;
        }

        if (response.body.directions.length === 0) {
            //console.error('Could not find location.');
            callback('No directions were found.');
            return;
        }

        var data = {
            directions: response.body.directions
        };

        callback(undefined, data);
    })
};

module.exports = {
    directions,
};