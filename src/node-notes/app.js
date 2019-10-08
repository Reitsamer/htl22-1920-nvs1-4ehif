const notes = require('./notes')

const command = process.argv[2]

if (command === 'create') {
  console.log('Creating note ...')
} else if (command === 'read') {
  console.log('Reading note ...')
} else if (command === 'list') {
  console.log('Listing notes ...')
} else if (command === 'remove') {
  console.log('Removing note ...')
} else {
  console.err('Unknown command:', command)
}