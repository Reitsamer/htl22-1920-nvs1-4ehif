const fs = require('fs')
const http = require('http')

const staticDirectory = '/public'

const contentTypes = {
  'html': 'text/html',
  'js': 'application/javascript',
  'css': 'text/css',
  'ico': 'image/x-icon'
}

const server = http.createServer()

const getFileName = (req) => {
  let filename = req.url
  if (filename === '/') {
    filename = '/index.html'
  }

  return __dirname + staticDirectory + filename
}

const getFileExtension = (fullPath) => {
  let parts = fullPath.split('.')
  return parts[parts.length - 1]
}

const getContentType = (fileExtension) => {
  let type = contentTypes[fileExtension]
  return (type === undefined) ? null : type
}

const sendError = (res, errorCode) => {
  res.statusCode = errorCode
  res.setHeader('Content-Type', 'text/html')
  res.write(`<h1>Error: ${errorCode}</h1>`)
  res.end()
}

const sendFile = (res, contentType, fullPath) => {
  let content = fs.readFileSync(fullPath)

  res.writeHead(200, {
    'Content-Type': contentType
  })

  res.end(content)
}

server.on('request', (req, res) => {

  let fullPath = getFileName(req)
  let fileExtension = getFileExtension(fullPath)
  let contentType = getContentType(fileExtension)

  if (contentType === null) {
    return sendError(res, 400)
  }

  // Hier wissen wir, dass wir den content-type unterstützen

  // Haben wir das verlangte File?
  if (!fs.existsSync(fullPath)) {
    sendError(res, 404)
    return
  }

  // Alles ok -> send file content with correct content-type
  sendFile(res, contentType, fullPath)
  
})

server.listen(8080, () => {
  console.log('Server running on port 8080.')
})