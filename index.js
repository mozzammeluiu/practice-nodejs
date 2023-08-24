const http = require('http');
const Calling = require('./lesson-event/event');

const calling = new Calling();

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

calling.on('call', ({ name, message }) => {
    console.log(`Hey ${name}!, ${message}`);
});
calling.callingStart();
