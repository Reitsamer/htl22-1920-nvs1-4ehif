const chalk = require('chalk');
const loganpaul = require('lodash');
const argv = require('yargs').argv;
const fs = require('fs')

const convert = (input) => {
    try {
        var existingp = fs.readFileSync(input, "UTF8")
        var putmeindb = makeObject(existingp)
        fs.writeFileSync('db.json', JSON.stringify(putmeindb))
        return ("Success = true")

    } catch (err) {
        return ("Success= false, message: " + err)
    }
}

const makeObject = (peoplei) => {
    var people = []
    peoplei2 = JSON.parse(peoplei);
    peoplei2.forEach(part => {
        var array = loganpaul.split(part, " ")
        var person = {
            "lastname": loganpaul.toUpper(array[0]),
            "firstname": array[1],
        }
        people.push(person);
    });
    return people
}

const pickRandom = (input) => {
    try {
        var existingdb = fs.readFileSync(input, "UTF8")
        Jsoned = JSON.parse(existingdb);
        var shuffleme = []
        Jsoned.forEach(part => {
            shuffleme.push(part.lastname + " " + part.firstname);
        });
        return ("Success = true, data: " + shuffleme[0])

    } catch (err) {
        return ("Success= false, message: " + err)
    }
}

const getSorted = (input, sortBy, order) => {
    try {
        //stopped here
        var existingdb = fs.readFileSync(input, "UTF8")
        Jsoned = JSON.parse(existingdb);
        if (sortBy === "firstname") {
            if (order === "asc") {
                var sorted = Jsoned.sort((a, b) => a.firstname.localeCompare(b.firstname));
                return sorted
            } else if (order === "desc") {
                var sorted = Jsoned.sort((a, b) => b.firstname.localeCompare(a.firstname));
                return sorted
            }
        } else {
            if (order === "asc") {
                var sorted = Jsoned.sort((a, b) => a.lastname.localeCompare(b.lastname));
                return sorted
            } else if (order === "desc") {
                var sorted = Jsoned.sort((a, b) => b.lastname.localeCompare(a.lastname));
                return sorted
            }
        }
    } catch (err) {
        return ("Success= false, message: " + err)
    }
}

const printPerson = (person) => {
    if (typeof person === "string") {
        splitupperson = person.split(" ")
        var persono = {
            "lastname": splitupperson[0],
            "firstname": splitupperson[1],
        }
        console.log(chalk.blue(persono.lastname + ", " + persono.firstname))
    } else {
        console.log(chalk.blue(person))
    }

}

module.exports = {
    convert,
    pickRandom,
    getSorted,
    printPerson
}