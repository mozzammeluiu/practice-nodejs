const http = require('http');
const handler = require('./reqResHandler');

function createServer(PORT){
    const server = http.createServer(handler);
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    })
}
module.exports = createServer;