const fs= require('fs');
const ls = require('lodash');
const moment=require('moment');
const getSortedByName=(input)=>{
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }
    
      const data = JSON.parse(fs.readFileSync(input))
     return { data:ls.orderBy(data, [data.firstname], ["asc"])} 
}
const printPerson=(person)=>{
    var split=ls.split(person.dateOfBirth,'.');
   console.log(`${ls.toUpper(person.lastname)}, ${person.firstname}, ${split[2]}-${split[1]}-${split[0]}`)
   
}
const findAllWithFirstname=(input,firstname)=>{
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }
      const data = JSON.parse(fs.readFileSync(input))
      var liost=[]
      data.forEach(element => {
          if(element.firstname.includes(firstname))
          liost.push(element)
      });
      return {data:liost}
}
const pickRandomAdult=(input)=>{
    if (!fs.existsSync(input)) {
        return { success: false, message: `File does not exists: ${input}` }
      }
      const data = JSON.parse(fs.readFileSync(input))
      var liost=[]
      data.forEach(element => {
        if(moment(element.dateOfBirth,'DD.MM.YYYY').diff(moment.now(),'years')>-18)
            liost.push(element)
    });
      var shuffeledarr=ls.shuffle(liost)
        return shuffeledarr[0]

}
const printAgeOf=(person)=>{
    //moment if abfrage
    
    console.log(`${ls.toUpper(person.lastname)}, ${person.firstname}, ${-moment(person.dateOfBirth,'DD.MM.YYYY').diff(moment.now(),'years')} years`)
}

module.exports={
    getSortedByName,
    findAllWithFirstname,
    pickRandomAdult,
    printAgeOf,
    printPerson
}