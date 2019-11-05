const lodash = require('lodash');
const fs = require('fs');
const chalk = require('chalk');

const convert = (filepath) => {
    try {
        var json = fs.readFileSync(filepath);
    } catch (err) {
        if (err.code === 'ENOENT')
            return {
                success: false,
                message: `File ${filepath} not found`
            };
        else
            return {
                success: false,
                message: 'Unknown error '
            };
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

    return {success: true};
};

const makeObject = (people) => {
    var peopleArray = [];

    people.forEach((names => {
        var namesArray = lodash.split(names, ' ');

        if (namesArray.length !== 2) {
            return {message: 'A name in the input file had more than one space.'}
        }

        var person = {
            lastname: lodash.toUpper(nameArray[0]),
            firstname: nameArray[1]
        };

        peopleArray.push(person);
    }));

    return {data: peopleArray}
};

const pickRandom = (filepath) => {
    try {
        var json = fs.readFileSync(filepath);
    } catch (err) {
        if (err.code === 'ENOENT')
            return {
                success: false,
                message: `File ${filepath} not found`
            };
        else
            return {
                success: false,
                message: 'Unknown error '
            };
    }

    var people = JSON.parse(json);
    var object = makeObject(people);
    var peopleArray = object.data;

    return {
        success: true,
        data: lodash.shuffle(peopleArray)[0]
    };
};

const getSorted = (filepath, sortBy, order) => {

    if ((order !== 'asc' && order !== 'desc') || (sortBy !== 'firstname' && sortBy !== 'lastname'))
        return {success: false, message: 'unknown order or sortBy-key'};
    try {
        var json = fs.readFileSync(filepath);
    } catch (err) {
        if (err.code === 'ENOENT')
            return {
                success: false,
                message: `File ${filepath} not found`
            };
        else
            return {
                success: false,
                message: 'Unknown error '
            };
    }

    console.log('beginning to sort');

    if (sortBy === 'firstname') {
        if (order === 'asc') {
            var sorted = json.sort((a, b) => a.firstname.localeCompare(b.firstname));
            console.log('firstname sorted ascending');
            return {success: false, data: sorted}
        } else {
            var sorted = json.sort((a, b) => b.firstname.localeCompare(a.firstname));
            console.log('firstname sorted descending');
            return {success: false, data: sorted}
        }
    } else {
        if (order === 'asc') {
            var sorted = json.sort((a, b) => a.lastname.localeCompare(b.lastname));
            console.log('firstname sorted ascending');
            return {success: false, data: sorted}
        } else {
            var sorted = json.sort((a, b) => b.lastname.localeCompare(a.lastname));
            console.log('firstname sorted descending');
            return {success: false, data: sorted}
        }
    }
};

const printPerson = (person) => {
    console.log(chalk.blue(`${person.lastname}, ${person.firstname}`))
};

module.exports = {
    convert,
    pickRandom,
    getSorted,
    printPerson
};