const fs= require('fs');
var obj= JSON.parse(fs.readFileSync( 'recipes_raw_nosource_ar.json'))
obj.forEach(element => {
    console.log(element)
});
