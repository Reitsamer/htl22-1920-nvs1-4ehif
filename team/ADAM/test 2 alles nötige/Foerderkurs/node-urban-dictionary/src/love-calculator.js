const request = require('request')

const getCompatibility = (first, second) => {

  return new Promise((resolve, reject) => {
    const options = {
      url: `https://love-calculator.p.rapidapi.com/getPercentage?fname=${first}&sname=${second}`,
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "162925fc19msh3819722ce3f07f1p1bbf4bjsnabbce8997683"
      },
      json: true
    }
  
    request( options, (error, request, body) => {
      if (error) {
        // TODO: deal with error
        reject(error)
        return
      }

      if (body.message) {
        reject(body.message)
        return
      }
  
      var result = {
        prozent: body.percentage,
        ergebnis: body.result
      }
  
      // TODO: deal with result
      resolve(result)
    })
  })
}

module.exports = {
  getCompatibility
}