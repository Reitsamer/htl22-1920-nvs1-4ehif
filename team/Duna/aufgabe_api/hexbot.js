var request = require('request')

const hexbotrequest = (count, callback) => {
    
    var url = `http://api.noopschallenge.com/hexbot?count=${count}`;


    request({ url: url,json: true }, (error,response, body) => {
        if (error) {
            
            callback("Unable to connect to service.", undefined)
        }

        
        var colors= body.colors;
       
        var Data = {
            colors
        }
        callback(undefined, Data)
       
    })
}
module.exports = {
    hexbotrequest
}
