const EventEmitter = require('events');

class Calling extends EventEmitter {
    callingStart() {
        setTimeout(() => {
            this.emit('call', {
                name: 'Mozzammel',
                message: 'Prothoma is calling you',
            });
        }, 2000);
    }
}
module.exports = Calling;
