const lodash = require('lodash');
const fs = require('fs');

const makeObject = (people) => {
    var peopleArray = [];

    people.forEach((names) => {
        var nameArray = lodash.split(names, " ");

        if (nameArray.length !== 2) {
            return {message: 'A name in the input file had more than one space.'}
        }

        var person = {
            lastname: lodash.toUpper(nameArray[0]),
            firstname: nameArray[1]
        };

        peopleArray.push(person);
    });

    return {data: peopleArray}
};

const convert = (filePath) => {
    try {
        var json = fs.readFileSync(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return {
                success: false,
                message: `File ${filePath} not found`
            }
        } else {
            return {
                success: false,
                message: 'Unknown error'
            }
        }
    }
    var people = JSON.parse(json);

    var object = makeObject(people);
    var peopleArray = object.data;

    if (!peopleArray) {
        return {
            success: false,
            message: object.message
        }
    }

    fs.writeFileSync("db.json", JSON.stringify(peopleArray));

    return {success: true}
};

module.exports = {
    convert
};