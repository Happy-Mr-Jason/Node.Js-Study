const dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.bind(3000);

socket.on('listening', function(){
    console.log('Listening event...');
});

socket.on('message', function(msg, rinfo){
    console.log('Messages are arrived...', rinfo.address, Buffer.from(msg).toString());
});

socket.on('close', function(){
    console.log('close event');
});