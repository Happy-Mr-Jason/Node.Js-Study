//Module
const http = require('http');

//Server Parameters
var port = 3000;
var hostname = '127.0.0.1';

//Craete Server Object
//request : client request
//response : response to client
//createXXXXX() : method for create the instance
//craeteServer() : return a new instance of http.Server

// var app = http.createServer((request, response) => {
var app = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World!');
});

// app.listen(port,hostname,() => {
app.listen(port,hostname,function(){
    console.log(`Server is running...at http://${hostname}:${port}/`);
});
