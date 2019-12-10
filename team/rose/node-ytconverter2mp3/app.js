var yargs = require('yargs')
var brainshopAI = require('./video2mp3')
const fs = require('fs');

var id = yargs.argv.id


brainshopAI(id, (error,data) => {
    console.log('Video to Mp3:')
    console.log('Error:', error)
    console.log('Data', data)
    fs.writeFile("C:/Users/Marcus.DESKTOP-KPPDCQK/Documents/GitHub/htl22-1920-nvs1-4ehif/team/rose/node-ytconverter2mp3/test.mp3", data, function(err) {

        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
    
    if(error) {
        console.error(error)
        return
    }
});