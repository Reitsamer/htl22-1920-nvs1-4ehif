const request = require('request')

const getStock = (stock) => {

  return new Promise((resolve, reject) => {
    const options = {
        method: 'GET',
        url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=0ZNTPTYXHDOP4P1L`,   
    }
  
    request( options, (error, request, body) => {
      if (error) {
        reject(error)
        return
      }

      if (body.message) {
        reject(body.message)
        return
      }



      // prozent: body.percentage,
      //  ergebnis: body.result
  
    var result 
    {

    }


      resolve(result)
    })
  })
}

module.exports = {
    getStock
}