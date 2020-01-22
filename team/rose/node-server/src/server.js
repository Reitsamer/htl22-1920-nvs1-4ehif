const http = require('http')
const fs = require('fs')

const port = 8080
const staticDirectory = './public'

contentTypes = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon'
}


const server = http.createServer()

const sendError = (res, errorCode) =>{
    res.statusCode = errorCode,
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Error: ${errorCode}</h1>`)
    res.end()
}

const sendFile = (res,contentTyp, fullPath) =>{
    let content = fs.readFileSync(fullPath)

    res.writeHead(200, { 'Content-Type': contentTyp})
        res.end(content)
  
}

server.on('request', (req, res) => {
    console.log('Got some request ...')

    let fullPath = getFileName(req)
    let fileExtension = getFileExtension(fullPath)
    let contentTyp = getContentType(fileExtension)

    console.log(fullPath)

    console.log(__dirname)

    if(contentTyp === null)
    {
        return sendError(res, 400)
    }

    if(!fs.existsSync(fullPath)){
        return sendError(res,404)
    }

    // Alles ok -> send file content with correct content-type

    sendFile(res, contentTyp, fullPath)

})

const getFileName = (request) => {

    let filename = request.url

    if (filename === '/')
        filename = '/index.html'

    return staticDirectory + filename
}

const getFileExtension = (fullPath) => {
    let parts = fullPath.split('.')
    return parts[parts.length - 1]
}

const getContentType = (fileExtension) => {
    let type = contentTypes[fileExtension]
    return (type  === undefined) ? null : type
}

server.listen(port, () => {
    console.log('Server running on port 8080')
})