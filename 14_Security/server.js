const https = require('https');
const http = require('http');
const fs = require('fs');

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

http.createServer(function (req, res) {
    res.end('Hello Unsecure Server');
}).listen(3000);

https.createServer(options, function (req, res) {
    res.end('Hello Secure Server');
}).listen(3001);