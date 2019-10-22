// 1

var s = 'Cool!'
console.log(s)

// 2

var sa = ['Banana', 'Apple', 'Peach', 'Strawberry']
sa.forEach(fruit => {
  console.log(fruit)
})

// 3

var arrObj = [
  {
    firstname: 'Günther',
    lastname: 'Jauch',
    zip: 1220,
    address: 'Donaustadtstrasse 45',
    dateOfBirth: '24-02-1989'
  },
  {
    firstname: 'Thomas',
    lastname: 'Gottschalk',
    zip: 1210,
    address: 'Großfeldsiedlung 4',
    dateOfBirth: '12-05-1999'
  },
  {
    firstname: 'Harald',
    lastname: 'Junke',
    zip: 1120,
    address: 'Meidlinger Hauptstraße',
    dateOfBirth: '03-03-1983'
  },
  {
    firstname: 'Stefan',
    lastname: 'Raab',
    zip: 1090,
    address: 'Alserstraße 5',
    dateOfBirth: '07-08-2001'
  },
]

// 4

arrObj.forEach(p => {
  console.log(`${p.lastname}, ${p.firstname}`)
})

console.log()

// 5 

var sortedPeople = arrObj.sort((a, b) => {
  if (a.firstname > b.firstname) {
    return 1
  }
  else if (b.firstname > a.firstname) {
    return -1
  }

  return 0
})

sortedPeople.forEach(p => {
  console.log(`${p.lastname}, ${p.firstname}`)
})

console.log()

arrObj.forEach(p => {
  console.log(`${p.lastname}, ${p.firstname}`)
})

// Alternative

arrObj.sort((a, b) => a.firstname.localeCompare(b.firstname))

// 6

const fs = require('fs')

try {
  const data = fs.readFileSync('persons.json', 'utf-8')
  var personData = JSON.parse(data)
  console.log(personData)
} catch (err) {
  console.error('Error:', err)
}