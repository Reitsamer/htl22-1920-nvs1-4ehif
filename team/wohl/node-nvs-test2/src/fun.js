const request = require('request')

const funcwithcallback = (input, callback) => {

    const options = {
        url: `https://numbersapi.p.rapidapi.com/${input}/trivia`,
        headers: {
          'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
          'x-rapidapi-key': '6471a1e68fmsh7ef70d34b551dffp11fac9jsn85ab8ef04fae'
        },
        json: true
      };

      request(options, (error, response, body) => {
      
        // Wenn es einen error gibt wird der an erster Stelle
        // übergeben im callback. Damit weiß man wenn die erste
        // Stelle undefined ist, gibt es keinen error.
        if (error) {
          callback(error)
          return
        }

        // Write your code

        //console.log("body: " + body)

        let result = {
            //input2: body.data
            //text: 'input whatever is needed'
            text: body,
            test: true
        }

        // Hiermit weiß man es gibt kein error
        callback(undefined, result)
      })      
}

module.exports = {
    //name of module
    funcwithcallback
}