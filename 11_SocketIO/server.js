const express = require('express');
const http = require('http');
var app = express();

var server = http.createServer(app);
server.listen(3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client.html');
});

var io = require('socket.io')(server);

io.on('connect', function(socket){
    console.log('Client is connected...');

    socket.on('disconnect', function(){
        console.log('Client is disconnected...');
    });

    setInterval(function(){
        socket.emit('message', 'Send a Message~~~');
    }, 3000);

});