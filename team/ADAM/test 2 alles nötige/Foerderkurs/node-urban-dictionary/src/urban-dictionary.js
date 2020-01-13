const request = require('request')

// function getMostLikedExplaination() { ... }
const getMostLikedExplaination = (word, callback) => {

  const options = {
    url: `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
    headers: {
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      "x-rapidapi-key": "162925fc19msh3819722ce3f07f1p1bbf4bjsnabbce8997683"
    },
    json: true
  };

  function processRequestReponse(error, response, body) {

    if (error) {
      callback(error)
      return
    }

    let maxThumbUp = 0
    let elementWithMostLikes

    body.list.forEach(element => {
      if (element.thumbs_up > maxThumbUp) {
        elementWithMostLikes = element
        maxThumbUp = element.thumbs_up
      }
    });

    // console.log(`Thumbs up: ${maxThumbUp}`)
    // console.log(elementWithMostLikes)
    let result = {
      text: elementWithMostLikes.definition,
      up_votes: elementWithMostLikes.thumbs_up,
      down_votes: elementWithMostLikes.thumbs_down
    }

    callback(undefined, result)
  }

  request(options, processRequestReponse)
}

module.exports = {
  // getMostLikedExplaination: getMostLikedExplaination
  getMostLikedExplaination
}