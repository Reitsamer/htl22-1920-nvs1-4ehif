const lodash=require('lodash')

const fs=require('fs');

const makeObject= (people)=>{
    var data=[];

    people.forEach(p => {
        var parts= lodash.split(p,',');
        p.forEach(pp=>{
            var parts2=lodash.split(pp,',')
            data.push({
                firstname: parts2[0],
                lasttname: lodash.toUpper(parts2[1]),
                birthdate: moment(parts2[2]).format("YYYY-MM-DD")
    
            })
        })
        
        
    });

    return data;
}
const getSortedByName =(input)=>{

    if(!fs.existsSync(input)){
        return "undefined"
    }

    const data= JSON.parse(fs.readFileSync(input));
    
    return lodash.orderBy(data, lasttname,"asc");
}


const printPerson=(person)=>{
   console.log(person.firstname+", "+ person.lasttname+", "+moment(person.birthdate).format("YYYY-MM-DD"))

  // person=JSON.parse(fs.readFileSync(input))
   //console.log(person.firstname +", "+ person.lasttname+", "+moment(person.birthdate).format("YYYY-MM-DD"))
}

const findAllWithFirstname=(input,firstname)=>{
    if(!fs.existsSync(input)){
        return "undefined"
    }
  
    const data=JSON.parse(fs.readFileSync(input))

    if(data.includes(firstname)){
        return data
    }

}

const printAgeOf=(person)=>{
    const data=JSON.parse(fs.readFileSync(input));

    data.forEach(p=>{
        var birth = moment(p.birthdate).format("YYYY-MM--DD");
        const age = moment().diff(p.birthdate,'year');

        console.log(p.lasttname,",", p.firstname,", ",age)
    });
    
}

const pickRandomAdult=(input)=>{
    const data=JSON.parse(fs.readFileSync(input));
    if(!fs.existsSync(input)){
        return "undefined"
    }

    data.forEach(p=>{
        var birth = moment(p.birthdate).format("YYYY-MM--DD");
        const age = moment().diff(p.birthdate,'year');
        const isAdult = (age >= 18);
        if(isAdult){
            var rndperson=lodash.shuffle(p)
            return rndperson[0]
        }
        
    });

    

}

module.exports={
    getSortedByName,
    pickRandomAdult,
    findAllWithFirstname,
    printAgeOf,
    printPerson
}