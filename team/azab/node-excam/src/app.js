const exercise01 = require('./exercise01')    
const exercise02 = require('./exercise02')    
const yargs = require('yargs').argv

// node index.js --word=lol

// command: node index.js xxx --option=yyy
// xxx: yargs._[0]
// yyy: yargs.option
 
//const word = yargs.word
const command = yargs._[0]

if (command === 1) {
    exercise01.funcwithcallback( (error, data) => {
      if (error) {
        console.error('An error occured: ' + error)
        return
      }
  
      console.log('Die Aufgabe ist: '+ data.aufgabe)
      console.log(data.data)
      console.log('Die Antwort ist: '+ data.answer)

      exercise01.funcSendAnswers( (error, data) =>{
        if (error) {
            console.error('An error occured: ' + error)
            return
          }
          dataparsed = JSON.parse(data)
          console.log(dataparsed)
      })
      })
  
    // node src/index.js --first=xxx --second=yyy
  } else if (command === 2) {
  
    exercise02.funcwithcallback( (error, data) => {
        if (error) {
          console.error('An error occured: ' + error)
          return
        }
    
        console.log('Die Aufgabe ist: '+ data.aufgabe)
        console.log(data.data)
        console.log('Die Antwort ist: '+ data.answer)
  
        exercise02.funcSendAnswers( (error, data) =>{
          if (error) {
              console.error('An error occured: ' + error)
              return
            }
            dataparsed = JSON.parse(data)
            console.log(dataparsed)
        })
 
      })}
