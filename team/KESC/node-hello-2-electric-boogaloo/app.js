const os = require('os');
const fs = require('fs');

var userinfo = os.userInfo();

console.log(`${userinfo.username} ist doof`);
fs.writeFileSync('message.txt', `${userinfo.username} ist doof`);