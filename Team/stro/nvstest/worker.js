const _ = require('loadash')
const fs = require('fs')
const mom=require('moment')


const getSortedByName=(input,sortBy, order)=>{
    if (!fs.existsSync(input)) {
        var message='undefined'
        return { message}
      }
    const data = JSON.parse(fs.readFileSync(input))
    var sortedPeople=_.orderBy(data, [sortBy], [order])
    return {  sortedPeople  }

}
const findAllWithFirstname=(input,firstname)=>{
    if (!fs.existsSync(input)) {
        var message='undefined'
        return { message}
      }
    const data = JSON.parse(fs.readFileSync(input))
    var otherdata = []
    data.forEach(d => {
        if(p.firstname.includes(firstname)){
            otherdata.push(d)
        }
    });
   return {otherdata}
}
const printPerson = (person) => {
    console.log(`${person.lastname}, ${_.toUpper(person.firstname)}, ${person.dateOfBirth}`)
  }
const printAgeOf=(person)=>{
    console.log(`${person.lastname}, ${_.toUpper(person.firstname)}, ${moment().diff(p.dateOfBirth, 'years')} years`)

}
const pickRandomAdult=(input)=>{
    if (!fs.existsSync(input)) {
        var message='undefined'
        return { message}
      }
    
      const people = JSON.parse(fs.readFileSync(input))
      var adults=[]
      people.forEach(p => {
        if(moment().diff(p.dateOfBirth, 'years')>18){
            adults.push(p)
        }
    });
      const shuffledPeople = _.shuffle(adults)
      var shuffled=shuffledPeople[0]
      return { shuffled }
}

module.exports = {
   getSortedByName,
   findAllWithFirstname,
   printPerson,
   printAgeOf,
   pickRandomAdult
  }