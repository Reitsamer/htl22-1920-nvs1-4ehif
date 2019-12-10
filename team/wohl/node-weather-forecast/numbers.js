const request = require('request')

const mathfact = (num, callback) => {

    var options = {
    method: 'GET',
    url: `https://numbersapi.p.rapidapi.com/${num}/math`,
    qs: {fragment: 'true', json: 'true'},
    headers: {
        'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
        'x-rapidapi-key': '6471a1e68fmsh7ef70d34b551dffp11fac9jsn85ab8ef04fae'
    }
    };

    request(options, function (error, response, body) {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response && response.statusCode >= 400) {
            callback('Unable to find location.')
            return
        }

        var dat = JSON.parse(body)

        var data = {
            text: dat.text,
            number: dat.number,
        }

        callback(undefined, data)
    });    
}

const fact = (type, num1, num2, callback) => {

switch(type) {
    case "math": {
        var uri = `https://numbersapi.p.rapidapi.com/${num1}/math`
        break;
    }
    case "trivia": {
        var uri = `https://numbersapi.p.rapidapi.com/${num1}/trivia`
        break;
    }
    case "date": {
        var uri =  `https://numbersapi.p.rapidapi.com/${num1}/${num2}/date`
        break;
    }
    case "year": {
        var uri = `https://numbersapi.p.rapidapi.com/${num1}/year`
        break;
    }
}

    var options = {
    method: 'GET',
    url: uri,
    qs: {fragment: 'true', json: 'true'},
    headers: {
        'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
        'x-rapidapi-key': '6471a1e68fmsh7ef70d34b551dffp11fac9jsn85ab8ef04fae'
    }
    };

    request(options, function (error, response, body) {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response && response.statusCode >= 400) {
            callback('Unable to find location.')
            return
        }

        var dat = JSON.parse(body)

        var data = {
            text: dat.text,
            number: dat.number,
            year: dat.year
        }

        callback(undefined, data)
    });    
}


module.exports = {
    fact,
    mathfact
}