const add = (x, y) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(x + y)
            //reject(`Dont't know the result of ${x}+${y}`)


        }, 2000)

    })
}


const doSomething = async () => {
    try {
        let result = await add(3 + 4);
        result = await add(result, 5);
        
    } catch (e) {
        console.error("Something went wrong.");
    }

    console.log(result)
}

doSomething();