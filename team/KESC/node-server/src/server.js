const http = require('http');

const PORT = 8080;
const STATIC_DIR = './public';

const contentTypes = {
    'html': 'text/html; charset=UTF-8',
    'js': 'text/javascript',
    'css': 'text/css'
};

const server = http.createServer();

const getPath = (url) => {
    if (url === '/') {
        url = '/index.html'
    }

    return STATIC_DIR + url
};

server.on('request', (req, res) => {

    console.log(req);

    const filename = getPath(req.url);

    // lol incomplete

    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // });
    //
    // res.end('<h1>Hello!</h1>')
});

server.listen(PORT, () => {
    console.log('Server running on port 8080.')
});