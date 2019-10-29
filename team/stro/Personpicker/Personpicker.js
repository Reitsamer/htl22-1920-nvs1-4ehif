const argv=require('yargs').argv
const _=require('lodash')

const read=require('./converter');

const command=argv._[0]
var input=argv.input
var sortby=argv.sortby
var order=argv.order
if(command==='convert'){
    var success=read.convert(input);
    if(success===true){
        console.log('Note added successfully')
    }
    else{
        console.log('cannot convert file')
    }

}else if(command==='pick'){

}else if(command==='print'){

}
