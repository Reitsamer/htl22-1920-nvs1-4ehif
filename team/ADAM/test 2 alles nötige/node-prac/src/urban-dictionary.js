const request = require("request");

const getMostLiked = (word, callback) => {
    const options = {
        url: `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
        headers: {
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            'x-rapidapi-key': '12f65dd427mshdccee955266164cp1d1555jsn9245e2827661'
        },
        json: true
    };

    request(options,(error, response, body) => {
        if (error) {
            callback(error);
            return
        }

        let maxThumbUp = 0;
        let elementWithMostLikes = 0;

        body.list.forEach(element => {
            if(element.thumbs_up > maxThumbUp){
                elementWithMostLikes = element;
                maxThumbUp = elementWithMostLikes.thumbs_up;
            }
        });

        let result = {
            text: elementWithMostLikes.definition,
            up_votes: elementWithMostLikes.thumbs_up,
            down_votes: elementWithMostLikes.thumbs_down
        };

        callback(undefined, result);
    });
};

module.exports = {
    getMostLiked
};