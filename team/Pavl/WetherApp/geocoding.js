var request=require('request');

const geocoding = (location,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Vienna.json?limit=2&access_token=pk.eyJ1IjoiYW5vbnltb3VzMTUwIiwiYSI6ImNrMzVwa3pjajExa3kzY21xYmR2NGNzNDQifQ.R2LJDD2EvOjQTwe0BG9hpw';


    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to service', undefined)
            return
        }

        if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)
            return
        }


        var data={
         name : response.body.features[0].place_name,
         longtitude : response.body.features[0].center[0],
         latitude : response.body.features[0].center[1]
        }
    

        callback(undefined, data)
    });

}

module.exports={ 
    geocoding
}