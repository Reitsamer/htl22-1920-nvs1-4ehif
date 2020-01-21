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

server.on('request', (req, res) => {

  let fullPath = getFileName(req)
  let fileExtension = getFileExtension(fullPath)
  let contentType = getContentType(fileExtension)

  if (contentType === null) {
    res.writeHead(400, {
      'Content-Type': 'text/html'
    })
  
    res.end(`Unsupported content-type: ${fileExtension}`)
    return
  }

  // Hier wissen wir, dass wir den content-type unterstützen

  // Haben wir das verlangte File?
  if (!fs.existsSync(fullPath)) {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    })
  
    res.end(`No such resource: ${fullPath}`)
    return
  }

  // Alles ok -> send file content with correct content-type
  let content = fs.readFileSync(fullPath)

  res.writeHead(200, {
    'Content-Type': contentType
  })

  res.end(content)
})

server.listen(8080, () => {
  console.log('Server running on port 8080.')
})