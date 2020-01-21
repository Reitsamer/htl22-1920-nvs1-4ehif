const urban = require('./urban-dictionary');
const love = require('./love-calculator');

const yargs = require('yargs').argv

// node index.js --word=lol

// command: node index.js xxx --option=yyy
// xxx: yargs._[0]
// yyy: yargs.option

const command = yargs._[0]

const myAsycLoveFunc = async (firstName, secondName) => {
  try {
    const result = await love.getCompatibility(firstName, secondName)

    // Next async call
    // const result = await love.ABC(firstName, secondName)

    console.log('Prozent: ' + result.prozent)
    console.log('Text: ' + result.ergebnis)
  } catch (error) {
    console.error("Ooopsy: " + error)
  }
}

if (command === 'urban') {
  const word = yargs.word

  urban.getMostLikedExplaination(word, (error, data) => {
    if (error) {
      console.error('An error occured: ' + error)
      return
    }

    console.log(`Thumbs up: ${data.up_votes} - Thumbs down: ${data.down_votes}`)
    console.log(`Description: ${data.text}`)

    // Call second async func with second callback
  })

  // node src/index.js --first=xxx --second=yyy
} else if (command === 'love') {
  const firstName = yargs.first
  const secondName = yargs.second

  love.getCompatibility(firstName, secondName)
    .then(result => {
      console.log(`${firstName} and ${secondName} have a match of ${result.prozent}%.`)
      console.log(`Advice: ${result.ergebnis}`)
      // return love.getCompatibility('Alice', 'John')
    })
    // .then(result => {

    // })
    .catch(error => {
      console.error(error)
    })
} else if (command === 'love-async') {
  const firstName = yargs.first
  const secondName = yargs.second

  myAsycLoveFunc(firstName, secondName)

}