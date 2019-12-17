// var

// var text = "Hello world"

// text = "abc"

// for (var i=0; i < 5; i++) {
//   var text = "Blub"
// }

// console.log(text)


// let

// let greeting = "Hello"
// greeting = "Guten Morgen"

// for (let i=0; i < 4; i++) {
//   let greeting = "Servus"
//   console.log(greeting)
// }

// console.log(greeting)
// // console.log(hello)

// const

// const greeting = {
//   morning: "Guten Morgen",
//   evening: "Guten Abend"
// }

// greeting.lunch = "Mahlzeit"
// greeting.morning = "Gute Nacht"


// // for (let i=0; i < 5; i++) {
// //   const greeting = "Hallo"
// //   console.log(greeting)
// // }

// console.log(greeting)


// const (workaround)

const triangle = Object.freeze({ a: 3, b: 4, c: 5 })

triangle.a = 10

console.log(triangle)