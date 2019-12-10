const add = (x, y, callback) => {
    
setTimeout(()=> {
    callback(undefined, x + y)
}, 2000)

}

add(4,3, (error, result) => {
    if(error) {
        console.error(error)
        return
    }
    add(result, 5, (error, result2) => {
        if(error) {
            console.error(error)
            return
        }
        add(result2, 6, (error, result3) => {
            if(error) {
                console.error(error)
                return
            }
            console.log(result3)
        })
        console.log(result2)
    })
    console.log(result)
})
