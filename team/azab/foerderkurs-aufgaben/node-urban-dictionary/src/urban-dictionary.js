const request = require('request')


// function getMostLikedExplaination() { ... }
const getMostLikedExplaination = (word, callback) => {

    const options = {
        url: `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
        headers: {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "cb98cd4719mshedaf1da841f638bp1cf53djsn1062377ff246"
        },
        json: true
    };


    function processRequestResponse(error, response, body) {
        // TODO: work with the answer from request

        console.log(`Error: ${error}`)
        //console.log(`Body: ${body.list}`)

        let maxThumbsUp = 0;
        let elementWithMostLikes

        body.list.forEach(element => {
            if (element.thumbs_up > maxThumbsUp) {
                elementWithMostLikes = element
                maxThumbsUp = element.thumbs_up
            }
        });

        //console.log(`Thumbs up: ${maxThumbsUp}`)
        //console.log(elementWithMostLikes)
        let result = {
            text: elementWithMostLikes.definition,
            up_votes: elementWithMostLikes.thumbs_up,
            down_votes: elementWithMostLikes.thumbs_down
        }

        callback(undefined, result)
    }

    request(options, processRequestResponse)
}