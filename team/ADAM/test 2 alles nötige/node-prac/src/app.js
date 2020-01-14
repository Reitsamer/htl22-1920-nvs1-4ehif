const urban = require('./urban-dictionary');
const love = require('./love-calculator');

// urban dictionary
const word = "lol";
urban.getMostLiked(word, (error, data) => {
    if (error) {
        console.error('An error occured: ' + error);
        return
    }

    console.log(`Thumbs up: ${data.up_votes} - Thumbs down: ${data.down_votes}`);
    console.log(`Description: ${data.text}`)

    // Call second async func with second callback
});



// love calculator - promise
const firstName = "Herbert";
const secondName = "Paula";

love.getCompatibility(firstName, secondName)
    .then(result => {
        console.log(`${firstName} and ${secondName} have a match of ${result.percent}%.`);
        console.log(`Advice: ${result.result}`)
        // return love.getCompatibility('Alice', 'John')
    })
    // .then(result => {

    // })
    .catch(error => {
        console.error(error)
    });


// love calculator async - await
const myAsyncLoveFunc = async (firstName, secondName) => {
    try {
        const result = await love.getCompatibility(firstName, secondName);

        // Next async call
        // const result = await love.ABC(firstName, secondName)

        console.log('Async Percent: ' + result.percent);
        console.log('Async Advice: ' + result.result);
    } catch (error) {
        console.error("Ooopsy: " + error);
    }
};

myAsyncLoveFunc(firstName, secondName);