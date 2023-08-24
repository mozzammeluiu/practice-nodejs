const Calling = require('./event');

const calling = new Calling();
calling.on('call', ({ name, message }) => {
    console.log(`Hey ${name}!, ${message}`);
});
calling.callingStart();
