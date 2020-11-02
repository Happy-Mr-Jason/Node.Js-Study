const net = require('net');

var ip = '127.0.0.1';
var port = 3000;

var socket = new net.Socket();

socket.connect({host : ip, port: port}, function(){
    console.log('Connect to Server Successfuly');

    socket.write('Hello Socket Server\n');
    socket.end();

    socket.on('data', function(data){
        console.log('Server Sent : ', data.toString());
    });

    socket.on('end', function(){
        console.log('Server is disconnected');
    });
});