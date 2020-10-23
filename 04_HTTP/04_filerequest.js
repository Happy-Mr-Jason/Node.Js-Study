const http = require('http');
const fs = require('fs');

var server = http.createServer(function (request, response) {
    var url = new URL(request.url, 'http://localhost:3000/');
    var reqUrl = url.pathname;

    if (reqUrl == '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><body><a href="/like">Like</a><br><a href="/bad">bad</a></body></html>');
    } else if (reqUrl == '/like') {
        fs.access('./like.png', function (err) {
            if (err) {
                response.statusCode = 404;
                response.end();
                return;
            }
            fs.readFile('./like.png', function (err, data) {
                response.end(data);
            });
        });
    } else if (reqUrl == '/bad') {
        fs.access('./bad.png', function (err) {
            if (err) {
                response.statusCode = 404;
                response.end();
                return;
            }
            fs.readFile('./bad.png', function (err, data) {
                response.end(data);
            })
        });
    }
})

server.listen(3000);