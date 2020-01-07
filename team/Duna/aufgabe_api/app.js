const chalk = require('chalk');
var yargs = require('yargs').argv
var hexbot=require('./hexbot')
const length = yargs.length;
const width = yargs.width;
const times=yargs.times;
var arr = new Array(length);
for(var i =0; i < arr.length;i++){
    arr[i]= new Array(width);
}
for( var time=0;time<times;time++){
hexbot.hexbotrequest(length*width,(error,data)=>{

 var z=0;
    for(var i =0; i<arr.length;i++){
        for(var j=0; j<arr[i].length;j++)
        {
            arr[i][j]=data.colors[z].value;
            z++;
        }
    }
    for(var i =0; i<arr.length;i++){
        var string =""
        for(var j=0; j<arr[i].length;j++)
        {
            string +=chalk.hex( arr[i][j])('▇');
        }

        console.log(string);
    }
});
}

