const fun = require('./fun')
const prom = require('./promise')

const yargs = require('yargs').argv
const command = yargs._[0]

const input1 = yargs.input1

console.log("Command: " + command)

console.log("Input1: " + input1)

if(command === 'fun') {

    //                  Input, begin of callback (error, outputdata)
    fun.funcwithcallback(input1, (error, {text}) => {
        
        if (error) {
            console.error(error)
            return
          }
        
        // Output whatever data you need from the callback
        console.log(`Text: ${text}`)
        return
    })
}

if(command === 'promise') {
    prom.funcwithpromise(input1)
    .then(result => {
        console.log(`result: ${result.text}`)
        return
    })
    .catch(error => {
        console.error(error)
        return
    })

}

// Nur eine schönere Art Promises & Co öfter hintereinander aufzurufen
const asyncFunction = async () => {
    let res = await prom.funcwithpromise(input1)
    let res2 = await prom.funcwithpromise('1999')

    let result =  `Results: ${res.text}\n${res2.text}`

    return result
}

if(command === 'async') {
    asyncFunction()
    .then((result) => {
        console.log(`Final result: ${result}`)
    })
    .catch((error) => {
        console.error("rejected")
    })
}