const argv = require('yargs').argv;

const {directions} = require('./directions.js');
const {draw} = require('./draw.js');
const {convert} = require('./convert.js');
const command = argv._[0];
switch (command) {
    case "create":
        const count = argv.count;
        const spacing = argv.spacing;
        directions(count, (error, data) => {
            if (error) {
                console.log('Error occurred:', error);
                return
            }
            draw(data, spacing);
            console.log("Finished");
        });
        break;
    case "convert":
        convert();
        break;
    case "info":
        console.log("Create: \n\tcount (max = 1000) \n\tspacing (Space of lines between creation of new pictures)");
        console.log("Convert: \n\tamount (index of last picture)");
        break;
}


