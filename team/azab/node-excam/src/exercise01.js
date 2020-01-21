const request = require('request')
const moment = require('moment')
const _ = require('lodash')


const funcwithcallback = (callback) => {


    // kic02s9d5k
    //ip-adresse: 10.10.21.88
    //port: 3000
    const options = {
        url: `http://10.10.21.88:3000/task/request/kic02s9d5k/1`,
        json: true
      };


      request(options, (error, response, body) => {
      
        // Wenn es einen error gibt wird der an erster Stelle
        // übergeben im callback. Damit weiß man wenn die erste
        // Stelle undefined ist, gibt es keinen error.

        if (error) {
          callback('Unable to connect to service.', undefined)
          return
        }
    
        
        if (response && response.statusCode >= 400) {
          callback('Unable to ....', undefined)
          return
        }

        // Write your code

        //console.log("body: " + body)

        var words = _.split(body.data, " ")
        var count = 0
        

        
        words.forEach(element => {
          count++
        });

        let result = {
            //input2: body.data
            //text: 'input whatever is needed'
            aufgabe: body.description,
            data: body.data,
            urlsolving: body.url,
            answer: count
        }        

        // Hiermit weiß man es gibt kein error
        callback(undefined, result)
      })      
}

const funcSendAnswers = (callback) => {


  // kic02s9d5k
  //ip-adresse: 10.10.21.88
  //port: 3000

  funcwithcallback( (error, data) => {

    request(url=`http://10.10.21.88:3000/task/solve/kic02s9d5k/1/${data.answer}`, json=true, (error, response, body) => {
    
      // Wenn es einen error gibt wird der an erster Stelle
      // übergeben im callback. Damit weiß man wenn die erste
      // Stelle undefined ist, gibt es keinen error.
      
      
      if (error) {
        callback('Something went wrong', undefined)
        return
      }
  
      if (response && response.statusCode >= 400) {
        callback('Something went wrong', undefined)
        return
      }

      


      // Hiermit weiß man es gibt kein error
      callback(undefined, body)
    })   
  })
   
}



module.exports = {
    //name of module
    funcwithcallback,
    funcSendAnswers
}
