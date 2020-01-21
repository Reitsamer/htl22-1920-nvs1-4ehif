var yargs = require('yargs')
var exchange = require('./exchange')

var getStock = yargs.argv.getStock

const getStockfunc = async (stock) => {
    try 
    {
      const result = await exchange.getStock(stock)
      
      console.log(result)

    } 
    catch (error) {
      console.error("Scotty wird haben ein Problem: " + error)
    }
  }
  
  
  
  if (getStock) 
  {
  
    getStockfunc(getStock)
    
  }
