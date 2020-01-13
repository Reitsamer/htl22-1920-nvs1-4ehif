const request = require('request')

const funcwithpromise = (input) => {

    return new Promise((resolve, reject) => {

        const options = {
            url: `https://numbersapi.p.rapidapi.com/${input}/year`,
            headers: {
              'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
              'x-rapidapi-key': '6471a1e68fmsh7ef70d34b551dffp11fac9jsn85ab8ef04fae'
            },
            json: true
          };

          request(options, (error, response, body) => {

            // promise immer erstes wird übernommen
            // reject muss auch returned werden
            if (error) {
              reject(error)
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
    
            // Resolve braucht kein undefined
            resolve(result)
          })      
    })
}

module.exports = {
    //name of module
    funcwithpromise
}