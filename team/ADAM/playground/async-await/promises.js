const add = (x , y) => {
  return new Promise((resolve , reject) => {
     setTimeout(()=> {
         if (x + y > 10){
             reject(`Don't know the result of ${x} + ${y}`);
             return
         }
         resolve(x + y)
     }, 2000)
  });
};

add(3, 4).then((result) => {
    add(result, 5).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.error(error)
    })
}).catch((error) => {
    console.error(error)
});