const add = (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x+y > 10) {
        reject(`Don't know the result of ${x} + ${y}`)
        return
      }
      resolve(x + y)
    }, 2000)
  })
}

add(3, 4)
  .then((result) => {
    console.log(result)
    return add(result, 5)
  })
  .then((result2) => {
    console.log(result2)
    return add(result2, 6)
  })
  .then((result3) => {
    console.log(result3)
  })
  .catch((error) => {
    console.error(error)
  })