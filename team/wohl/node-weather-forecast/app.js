var forecast = require('./forecast')
var { geocode } = require('./geocode')  
var numbers = require('./numbers')  
var yargs = require('yargs')
const argv = require('yargs').argv
const command = argv._[0]
var location = yargs.argv.location
var type = yargs.argv.type
var num = yargs.argv.num
var day = yargs.argv.day
var month = yargs.argv.month

if(command === 'info') {
console.log('Usable commands: \nmath --num=""\ntrivia --num"number or "random""\ndate --month="" --day=""\nyear --num=""\ngeocode')
}
else if(command === 'geocode') {
    geocode(location, (error, {name, latitude, longitude}) => {

        if(error) {
            console.log(error)
            return
        }

        forecast(latitude, longitude, (error, {summary, temperature, rainProbability}) => {
            
            if(error) {
                console.log(error)
                return
            }

            console.log(name)
            console.log(`Zusammenfassung: ${summary}`, )
            console.log(`Die Temperatur beträgt: ${temperature} Grad Celsus`)
            console.log(`Die Regenwahrscheinlichkeit liegt bei ${rainProbability}%`)
        })
    })
}
else if(command === 'facts') {
    switch (type) {
        case "math":
            numbers.fact(type, num, undefined, (error, {text, number}) => {
        
                if(error) {
                    console.log(error)
                    return
                }
            
                console.log(number + " is " + text)
            })
            break;
        case "trivia":
            numbers.fact(type, num, undefined, (error, {text, number}) => {
        
                if(error) {
                    console.log(error)
                    return
                }
            
                console.log(number + " is " + text)
            })
            break;
        case "date":
            numbers.fact(type, month, day, (error, {text, year}) => {
        
                if(error) {
                    console.log(error)
                    return
                }
                console.log(`date: ${day}-${month}-${year}`)
                console.log(text)
            })
            break;
        case "year":
            numbers.fact(type, num, undefined, (error, {text, number}) => {
        
                if(error) {
                    console.log(error)
                    return
                }
            
                console.log("Year: " + number)
                console.log(text)
            })
            break;
    }
}
