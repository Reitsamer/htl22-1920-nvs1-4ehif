const request = require('request')


const getJoke = (callback) => {
    const options = {
    url: `https://joke3.p.rapidapi.com/v1/joke`,
    headers: {
        "x-rapidapi-host": "joke3.p.rapidapi.com",
	    "x-rapidapi-key": "cb98cd4719mshedaf1da841f638bp1cf53djsn1062377ff246"
    },
    json: true
    }

    request(options, function(error, response, body) {
        if(error){
            callback(error)
            return
        }

        let result = {
            id: body.id,
            joke: body.content,
            likes: body.upvotes,
            dislikes: body.downvotes,
        }
        console.log(result)
        callback(undefined, result)
    })
}

module.exports = {
    getJoke
}