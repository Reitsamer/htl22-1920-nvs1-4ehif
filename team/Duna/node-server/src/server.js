const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end('<h1>hello!</h1>')
})

server.listen(8080,()=>{
    console.log('Server running on port 8080.')
})