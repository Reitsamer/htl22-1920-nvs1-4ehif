const add = (x, y) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(x + y)
            //reject(`Dont't know the result of ${x}+${y}`)

        }, 2000)
    })
}

add(3, 4).then((result) => {
    console.log(result)
}).catch((eroor) => {
    console.error(error);
})