const argv= require('yargs').argv;
const chalk= require('chalk')

const converter= require("./converter")

const command= argv._[0];
const input= argv.input;
var status;
switch(command){
    case "convert":{
        status=converter.convert(input)
        if(status.succsess===true){
            console.log(chalk.green("Success"))
        }
        else
        console.log(chalk.red("fehler " + status.message))
    }
    case "pick":{
        status=converter.pickRandom(input)
        if(status.succsess===true){
           converter.printPerson(status.data)
        }
        else
        console.log(chalk.red("fehler " + status.message))

    }
    case "print":{
        var sortBy=argv.sortBy
        var order=argv.order || "asc"
        status=converter.getSorted(input,sortBy,order)

        if(status.succsess===true){
            status.data.forEach(p=>converter.printPerson(p))
        }
        else
        console.log(chalk.red("fehler " + status.message))


    }
}