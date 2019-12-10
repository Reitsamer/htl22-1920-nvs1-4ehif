var request = require('request')
var yargs = require('yargs')
const argv = require('yargs').argv
var nooptest = require('./noopstest')
const fs = require('fs')

const command = argv._[0]
var direction = yargs.argv.direction

if (command === 'start') {
    nooptest("1", (error, body) => {

        if (error) {
            console.error(error)
            return
        }
        console.log(body.message)
        console.log(body.description)
        console.log('You can move in these directions = ' + body.exits)
        console.log('The maze exit is in the ' + body.mazeExitDirection + ' and is ' + body.mazeExitDistance + ' rooms away')
        console.log('please enter continue and a directon in this format continue --direction="N"')
    })
} else if (command === 'continue') {
    nooptest("2" + direction, (error, body) => {

        if (error) {
            console.error(error)
            return
        }
        console.log(body.message)
        if(body.status="finished")
        {

        }else
        if(body.status!=undefined)
        {

            console.log(body.description)
            console.log('You can move in these directions = ' + body.exits)
            console.log('The maze exit is in the ' + body.mazeExitDirection + ' and is ' + body.mazeExitDistance + ' rooms away')
        }


    })
}

