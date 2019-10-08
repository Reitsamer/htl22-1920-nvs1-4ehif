const notes = require('./notes')

console.log(process.argv[2]);

// if(command === 'create'){
//     console.log('Creating note ....');
// } else if (command === 'read'){
//     console.log('Reading note ....');
// } else if (command === 'remove'){
//     console.log('Removing note ....');
// } else {
//     console.error('Unknown command: ', command);
// }

switch (command) {
    case 'create':
        console.log('Creating note ....');
        break;
    case 'read':
        console.log('Reading note ....');  
        break;
    case 'remove':
        console.log('Removing note ....');
    default:
        console.error('Unknown command: ', command);
        break;
}