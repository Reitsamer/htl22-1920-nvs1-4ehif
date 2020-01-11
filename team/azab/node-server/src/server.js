const http = require('http')

const port = 8080
const staticDirectory = './public'
const contentTypes = {
    'html': 'text/html'
}

const server = http.createServer()

server.on('request', (req, res) => {

    console.log(req)

    const filename = getFileName(req)
    //res.writeHead(200, {
    //    'Content-Type': 'text/html'
    //})
    //res.end('<h1>Hello!</h1>')
})

const getFileName = (req) => {
    let filename = req.url

    if( filename === '/'){
        filename = '/index.html'
    }

    return staticDirectory + filename
}


server.listen(port, () => {
    console.log('Server running on port 8080.')
})