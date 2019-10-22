const os =require('os')

var x= os.userInfo()

console.log(x)
console.log('Hello,' + x.username +'!')

false.appendFileSync('message.txt','Open SALAMI')