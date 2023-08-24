const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    console.log(url, 'url');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
});

server.listen(8080, () => {
    console.log('Connection established on port 8080');
});
