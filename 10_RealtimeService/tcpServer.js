const net = require('net');

var server = net.createServer(function(socket){
    console.log('Client is connected....');
    socket.write('Welcome to Socket Server');

    socket.on('data', function(data){
        console.log('Client Sent : ', data.toString());
    });

    socket.on('end', function(){
        console.log('Client is disconnected...');
    });
});

server.on('listening', function(){
    console.log('Sever is listening...');
});

server.on('close', function(){
    console.log('Server is closed...');
});

server.listen(3000);