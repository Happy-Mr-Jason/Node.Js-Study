const http = require('http');

var server = http.createServer(function (request, response) {
    // response is a Object of SeverResponse Class
    
    var _url = request.url;
    var url = new URL(_url, 'http://localhost:3000/');

    response.statusCode = 200;
    response.statusMessage = 'OK';
    if (url.pathname == '/html') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><h1> HTML Page </h1></body></html>');
        response.write('Request URL : ' + url.pathname);
    } else {
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello World\n');
        response.write('<html><body><h1> This is Text Page </h1></body></html>');
        response.write('Request URL : ' + url.pathname);
    }
    response.end();
});

server.listen(3000);