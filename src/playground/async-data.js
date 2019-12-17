const geocode = (location, callback) => {
  setTimeout(() => {
    var data = {
      latitude: 1,
      longitude: 50,
    }

    callback(null, data)
  }, 2000)
}

// geocode('Vienna', (error, data) => {
//   console.log('error: ', error)
//   console.log('data: ', data)
// })

var result = geocode('Vienna', (error, data) => {
  console.log("Received data: ", data)
})
console.log(result)
