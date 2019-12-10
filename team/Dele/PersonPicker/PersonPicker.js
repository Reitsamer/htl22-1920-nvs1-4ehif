const argv=require('yargs').argv
const argvss=require('chalk')

const read=require('./converter');

const command=argv._[0]

var input=argv.input
var sortby=argv.sortby
var order=argv.order

if(command==='convert'){
var success=read.convertFile(input)
if(success===true){
    console.log('File converted successfully')
}else
{
    console.log('Can not convert file')
}
}else if(command==='pick'){

}else if(command==='print');