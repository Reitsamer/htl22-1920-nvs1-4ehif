const request = require("request");

const getCompatibility = (first, second) => {

    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: `https://love-calculator.p.rapidapi.com/getPercentage?fname=${first}&sname=${second}`,
            headers: {
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                'x-rapidapi-key': '12f65dd427mshdccee955266164cp1d1555jsn9245e2827661'
            },
            json: true
        };

        request( options, (error, request, body) => {
            if (error) {
                // TODO: deal with error
                reject(error);
                return
            }

            // api bug
            if (body.message) {
                reject(body.message);
                return
            }

            const result = {
                percent: body.percentage,
                result: body.result
            };

            // TODO: deal with result
            resolve(result)
        })
    })
};

module.exports = {
    getCompatibility
};