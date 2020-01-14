const http = require('http');
const server = http.createServer();

const port = 8080;
const staticDirectory = './public';
const contentTypes = {
    'html': 'text/html',
    'js': 'text/js'
};
server.on('request', (req, res) =>{

    const filename = getFileName(req);
 //   res.writeHead(200, {
 //       'Content-Type': 'text/html'
 //   });
 //   res.end('<h1>hello</

});

const getFileName = (req) => {
    let filename = req.url;

    if(filename === '/'){
        filename = '/index.html'
    }

    return staticDirectory + filename
};
server.listen(port, () => { console.log('Server running on port 8080')});