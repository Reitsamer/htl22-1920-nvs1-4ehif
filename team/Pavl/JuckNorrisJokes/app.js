var conv = require('./norris');

conv.joke((error,body)=>{
  if(error){
    console.log(error);
    return;
}
  console.log(body.value);
});