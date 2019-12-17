const add = (x, y, f) => {
  setTimeout(() => {
    f(undefined, x + y)
  }, 2000)
}

add(3, 4, (error, result) => {
  if (error) {
    console.error(error)
    return
  }

  add(result, 5, (error, result2) => {
    if (error) {
      console.error(error)
      return
    }
    
    add(result2, 6, (error, result3) => {
      if (error) {
        console.error(error)
        return
      }
      console.log(result3)
    })
  })
})

