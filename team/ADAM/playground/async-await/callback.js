const add = (x, y, f) => {
    setTimeout(() => {
        f(x + y);
    },2000)
};

add(3,4, (error, result) =>{
    if(error){
        console.error(error);
        return
    }
    add(result, 5,(error, result)=>{
        if(error){
            console.error(error);
            return
        }
        add(result, 6, (error, result) => {
            if(error){
                console.error(error);
                return
            }
            console.log(result)
        });
    });
});
