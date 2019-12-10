const argv= require('yargs').argv;
const worker=require('./worker');

const command= argv._[0];
const input= argv.input;

var status
switch(command){
    case "print-sorted":{

        status=worker.getSortedByName(input)
        
        status.data.forEach(p=>worker.printPerson(p))
       
       // if(status===true){
       //     status.data.forEach(p=>worker.printPerson(p))
       // }
        
        break;
    }

    case "find-all":{
        const firstname=argv.firstname;
        status=worker.findAllWithFirstname(input,firstname)
    
            worker.printPerson(status.data)
        //if(status===true){
        //    worker.printPerson(status.data)
        //}
        break;
    }

    case "pick-adult":{

        status=worker.pickRandomAdult(input)
        worker.printAgeOf(status.data)

       // if(status===true){
        //    worker.printAgeOf(status.data)

        //}
       
    }
}