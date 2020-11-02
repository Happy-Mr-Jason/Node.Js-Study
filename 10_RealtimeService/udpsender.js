const dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var str = 'Hello UDP Receiver';
var msg = Buffer.from(str, 0, str.length);

socket.send(msg, 3000, '127.0.0.1', function (error) {
    console.log(error);
    if (error) {
        console.log('UDP message send error', error);
        return;
    }
    console.log('Messages are sent successfuly');
    socket.close();
});