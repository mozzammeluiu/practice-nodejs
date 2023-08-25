const createServer = require('./Helpers/createServer');

const app = {};
app.config = {
    PORT: 8000
}

createServer(app.config.PORT);
console.log('Hello World!')