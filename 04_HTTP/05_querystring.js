const http = require('http');

var server = http.createServer(function(request, response){
    var url = new URL(request.url, 'http://localhost:3000');
    var query = url.searchParams;
    var startNum = parseInt(query.get('start'));
    var endNum = parseInt(query.get('end'));
    var result = 0;

    if(!startNum || ! endNum){
        response.statusCode = 404;
        response.write('Wrong parameters! Check your parameters\n');
        response.end('start and end has to be integer!');
    }

    for(var i = startNum ; i <= endNum ; i++){
        result += i;
    }
    response.statusCode = 200;
    response.end('Result : ' + result);
});

server.listen(3000);