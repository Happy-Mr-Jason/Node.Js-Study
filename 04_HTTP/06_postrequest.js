const http = require('http');
const querystring = require('querystring');

var movieList = [{
    title: 'StarWars',
    director: 'George Lucas'
}];

var server = http.createServer(function (request, response) {
    if (request.method.toLowerCase() == 'post') {
        addNewMovie(request, response);
    } else {
        showList(request, response);
    }
});
server.listen(3000);

function showList(request, response) {
    response.writeHeader(200, {
        'Content-Type': 'text/html; charset = UTF-8'
    });
    response.write(`<html>
        <meta charset="UTF-8">
        <body>
            <h3>Favorite Movie</h3>
            <div>
                <ul>`);
    movieList.forEach(function (movie) {
        response.write(`<li>${movie.title}(${movie.director})</li>`)
    });
    response.write(`</ul>
            </div>
            <form method="post" action=".">
                <h4> 새 영화 입력 </h4>
                <div><input type="text" name="title" placeholder="Movie Title"></div>
                <div><input type="text" name="director" placeholder="Director"></div>
                <input type="submit" value="upload">
            </form>`);
    response.write(`</body></html>`);
    response.end();
}

function addNewMovie(request, response) {
    var body = '';
    request.on('data', function (chunk) {
        body += chunk;
    });
    request.on('end', function () {
        var data = querystring.parse(body);
        var title = data.title;
        var director = data.director;
        movieList.push({
            title: title,
            director: director
        });
        //response.end('Success');
        //PRG(Post-Redirect-Get) Pattern 
        response.statusCode = 302;
        response.setHeader('Location', '.');
        response.end();
    });
}