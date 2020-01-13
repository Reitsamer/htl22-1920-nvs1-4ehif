const http = require('http')

const port = 8080
const staticDirectory = './public'

contentTypes = {
    'html': 'text/html'
}


const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Got some request ...')

    console.log(req)

    const filename = getFileName(req)


    res.writeHead(200, {'Content-Type' : 'text/html'})

    res.write('<h1>This is a message!</h1>')
    res.end('Hello and Bye!')
})

const getFileName = (request) => {
    let name = request.url

    if(filename ==='/')
        filename = '/index.html'

    return staticDirectory + filename
}

server.listen(port, () => {
    console.log('Server running on port 8080')
})