const fs = require('fs')
const os = require('os')
const lodash = require('lodash')


const fetchFile = (name) => {
    try {
    var file = fs.readFileSync(name)
    return JSON.parse(file)
    } catch(err) {
        return false
  }
}

const makeObject = (file) => {
    var arr = []
    file.forEach(element => {
        var sp = lodash.split(element, ' ')
        arr.push(person = {
            lastname: lodash.toUpper(sp[0]),
            firstname: sp[1]
        })
    });
    fs.writeFileSync('db.json', JSON.stringify(arr))
    return arr
}

const pickRandom = (input) => {
    var file = fetchFile(input)
    if(file === false) {
        return false
    }
    return lodash.shuffle(file)[0]
}

const convert = (input) => {
    var file = fetchFile(input)
    if(file === false) {
        return false
    }
    return makeObject(file)
}

const getSorted = (input, sortBy, order) => {
    var file = fetchFile(input)
    if(file === false) {
        return false
    }
    console.log("beginn sortieren")
    if(sortBy === "firstname") {
        if(order === "asc") {
            var sorted = file.sort((a, b) => a.firstname.localeCompare(b.firstname));
            console.log("firstname sortiert asc")
            return sorted
        } else if (order === "desc") {
            var sorted = file.sort((a, b) => b.firstname.localeCompare(a.firstname));
            console.log("firstname sortiert desc")
            return sorted
        } else {
            return "Fehler"
        }
    } else {
        if(order === "asc") {
            var sorted = file.sort((a, b) => a.lastname.localeCompare(b.lastname));
            console.log("lastname sortiert desc")
            return sorted
        } else if (order === "desc") {
            var sorted = file.sort((a, b) => b.lastname.localeCompare(a.lastname));
            console.log("lastname sortiert desc")
            return sorted
        } else {
            return "Fehler"
        }
    }
}

module.exports = {
    convert,
    pickRandom,
    getSorted
}