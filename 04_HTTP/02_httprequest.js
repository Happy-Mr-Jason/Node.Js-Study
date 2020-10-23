const http = require('http');

var server = http.createServer(function(request, response){
    //request is a Object of IncomingMessage Class
    console.log('HTTP Method : ', request.method);
    console.log('Url : ', request.url);
    console.log('Headers : ', request.headers);

});

server.listen(3000);