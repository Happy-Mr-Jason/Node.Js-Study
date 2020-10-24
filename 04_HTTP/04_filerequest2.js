const http = require('http');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (request, response) {
    var reqUrl = request.url;
    var url = new URL(reqUrl, 'http://localhost:3000/');
    console.log('Request URL : ', url);
    var urlPath = url.pathname;

    if (urlPath == '/') {
        response.statusCode = 200;
        response.end(`<html><head></head><body><img src="./like.png"><img src="./bad.png"></body></html>`);
    } else if (urlPath.endsWith('.png')) {
        var filePath = __dirname + path.sep + url.pathname.substring(1);
        console.log('Find file path : ', filePath);
        fs.access(filePath, function (err) {
            if (err) {
                response.statusCode = 404;
                response.end('File not Found!!');
            }
            fs.readFile(filePath, function (err, data) {
                response.statusCode = 200;
                response.end(data);
            })
        })
    } else {
        response.statusCode = 404;
        response.end('Page not Found!!');
    }
});

server.listen(3000);