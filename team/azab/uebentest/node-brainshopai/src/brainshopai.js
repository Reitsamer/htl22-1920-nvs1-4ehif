const request = require('request')

const getAnswerFromAI = (message, callback ) =>{
    var options = {
        method: 'GET',
        url: 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get',
        qs: {bid: '178', key: 'sX5A2PcYZbsN5EY6', uid: 'mashape', msg: message},
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key': 'cb98cd4719mshedaf1da841f638bp1cf53djsn1062377ff246'
        },
        json: true
      };

    request(options, (error, response, body) => {
        if(error){
            callback(error)
            return
        }


        let data = {
            talking: body.cnt
        }
        callback(undefined, data)
    })
}

module.exports = {
    getAnswerFromAI
}