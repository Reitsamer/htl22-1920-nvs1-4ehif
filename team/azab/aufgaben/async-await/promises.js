const add = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x+y)
            //reject(`Don't know the result of ${x} + ${y}`)
        }, 2000)
    })
 
}


add(3, 4).then((result) => {
    add(result, 5).then((result2) => {
        console.log(result2)
    }).catch((error2) => {
        console.error(error2)
    })
}).catch((error) => {
    console.error(error)
})

