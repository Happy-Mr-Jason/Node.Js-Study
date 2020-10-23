const http = require('http');

var server = http.createServer();
server.on('request', (request, response) =>{
    response.write('Hello World 3000');
    response.end();
});

server.listen(3000);

var app = http.createServer(function (request, response){
    console.log('Server is Running....');
     response.end('Hello World 3001');
});

app.listen(3001);

