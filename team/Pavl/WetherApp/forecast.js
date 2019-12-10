var request = require('request');



const forecast = (latitude,longtitude, callback) => {

    const url = `https://api.darksky.net/forecast/f673c0663d5e123d77959adb0c7e5bb8/${latitude},${longtitude}?lang=de&&units=si`;

    request({ url, json: true }, (error, response, body) => {
        //   console.log('error:', error); 
        //   console.log('statusCode:', response && response.statusCode); 
        //   console.log('body:', body);

        if (error) {
            callback('Unable to connect to service', undefined)
            return
        }

        if (response && response.statusCode >= 400) {
           // console.error('Unable to find location.');
           callback('Unable to find location')
            return
        }

        //console.log(body.daily.data[0].summary);
        //console.log(`it is currently ${body.currently.temperature} degress out. there is a ${body.currently.precipProbability}` )

        var data = {
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            rainProbability: body.currently.percipPrbability
        }

        callback(undefined,data)

    });
}






module.exports= forecast
