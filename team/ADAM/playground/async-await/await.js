const add = (x, y) => {
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

const doSomething = async () => {

        let result = await add(3, 4);
        result = await add(result, 5);
        console.log(result)
};

doSomething().then((result) => {
    console.log('Final result: ' + result)
}).catch((error) => {
    console.error("rejected")
});