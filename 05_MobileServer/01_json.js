const http = require('http');

var movieList = [{
    title: 'Starwars1',
    director: 'lucas'
}];

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'post') {
        var buffer = '';
        req.on('data', function (chunk) {
            buffer += chunk;
        });
        req.on('end', function () {
            var data = JSON.parse(buffer);
            var titleData = data.title;
            var directorData = data.director;
            console.log(data);
            movieList.push({
                title: titleData,
                director: directorData
            });
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                result: 'Success'
            }));
        });
    } else {
        var result = {
            count: movieList.length,
            data: movieList
        };
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    }
});

server.listen(3000);