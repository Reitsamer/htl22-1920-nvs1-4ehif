const fs=require('fs');
const argv=require('yargs').argv
const _=require('lodash')


const fetchAllNotes= () =>{
    try{
    var existingNotes=fs.readFileSync('students.json')
    return JSON.parse(existingFile);
    }catch{
        return[];
    }
}

const makeObject=(people)=>{
    var arr=[];
    people.forEach(ele => {
      var split=  _.split(ele,' ');
        arr.push(
            {
                lastname: _.toUpper(split[0]),
                firstname: split[1]
            }
        )
    });
    return arr;
}
const convert=(input)=>{
    var existingNotes=fs.readFileSync(input);
   existingFile=  JSON.parse(existingFile);
  var arr=  makeObject(existingFile);
    if(arr.length!==0){
        return true;
    }else{
        return false;
    }

}
const pickRandom=(input)=>{

}
const printPerson=()=>{

}
constGetSorted=(input,sortby,order)=>{

}
module.exports={
    convert,
    pickFile,
    printFile
}