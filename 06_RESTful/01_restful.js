/**
 * Restful Design
 * 1. Get Movie List
 *    url : /movies
 *    method : get
 *    response : JSON, counter, list (id, name)
 * 2. Get a Movie info
 *    url : /movies/id
 *    method : get
 *    id = number ex) /movies/0
 *    response : list(movie info all)
 * 3. Add Movie List
 *    url : /movies
 *    method : post
 *    response : JSON, err or success
 * 4. Update Movie
 *    url : /movies/id
 *    method : put
 *    id = number ex) /movies/0
 *    response : JSON, err or success  
 * 5. Delete Movie
 *    url : /movies/0
 *    method : delete 
 *    id = number ex) /movies/0
 *    response : JSON, err or success
 */

const http = require('http');
const fs = require('fs');

var movieList = [];

fs.readFile('01_restful.json', function (err, data) {
    if (err) {
        console.log('Can not open the file!!');
        return;
    }
    var parsedData = JSON.parse(data);
    movieList = parsedData;
    console.log('movieList', movieList);
});

var server = http.createServer(function (req, res) {
    var url = new URL(req.url, "http://localhost:3000");
    console.log('Request URL', url.pathname, req.method);
    switch (req.method.toLocaleLowerCase()) {
        case 'get':
            if (url.pathname == '/movies') {
                showMovieList(res);
            } else if (url.pathname.indexOf('/movies/') == 0) {
                var id = parseInt(url.pathname.split('/')[2]);
                if (id >= 0) {
                    showMovie(id, res);
                }
            } else {
                showDefault(res);
            }
            break;
        case 'post':
            if (url.pathname == '/movies') {
                addMovie(req, res);
            }
            break;
        case 'put':
            if (url.pathname.indexOf('/movies/') == 0) {
                var id = parseInt(url.pathname.split('/')[2]);
                if (id) {
                    updateMovie(id, req, res);
                }
            }
            break;
        case 'delete':
            if (url.pathname.indexOf('/movies/') == 0) {
                var id = parseInt(url.pathname.split('/')[2]);
                if (id) {
                    deleteMovie(id, res);
                }
            }
            break;
        default:
            showDefault(res);
            break;
    }
});

server.listen(3000, function () {
    console.log('Server is running on 3000');
});

function showDefault(res) {
    console.log('ShowDefault......');
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end('standby....');
}

function showMovieList(res) {
    console.log('ShowMovieList......');
    var resultData = {
        result: 'success',
        count: movieList.length,
        movies: movieList
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(resultData));
}

function showMovie(id, res) {
    console.log('ShowMovie......');
    var resultData = null;
    var movie = null;
    movieList.forEach(function (item) {
        if (item.id == id) {
            movie = item;
            return;
        }
    });
    if (movie) {
        resultData = {
            result: 'success',
            movie
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    } else {
        resultData = {
            error: {
                code: 404,
                message: 'not found'
            }
        }
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });
    }
    res.end(JSON.stringify(resultData));
}

function addMovie(req, res) {
    console.log('AddMovie......');
    var buffer = '';
    req.on('data', function (chunk) {
        buffer += chunk;
    });
    req.on('end', function () {
        var reqData = null;
        if (buffer.length > 0) {
            reqData = JSON.parse(buffer);
        }
        if (reqData != null && reqData.length != 0) {
            movieList.push(reqData);
            console.log('addedData', reqData);
            console.log('added Result', movieList);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                result: 'success'
            }));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                result: 'fail'
            }));
        }
    });
}

function updateMovie(id, req, res) {
    console.log('UpdateMovie......');
    var buffer = '';
    req.on('data', function (chunk) {
        buffer += chunk;
    });
    req.on('end', function () {
        var reqData = null;
        if (buffer.length > 0) {
            reqData = JSON.parse(buffer);
        }
        if (reqData != null && reqData.length != 0) {
            for (var i = 0; i < movieList.length; i++) {
                var movie = movieList[i];
                if (movie.id == id) {
                    movie.name = (reqData.name) ? reqData.name : movie.name;
                    movie.year = (reqData.year) ? reqData.year : movie.year;
                    movie.runtime = (reqData.runtime) ? reqData.runtime : movie.runtime;
                    movie.categories = (reqData.categories) ? reqData.categories : movie.categories;
                    movie.releasedate = (reqData.releasedate) ? reqData.releasedate : movie.releasedate;
                    movie.director = (reqData.director) ? reqData.director : movie.director;
                    movie.writer = (reqData.writer) ? reqData.writer : movie.writer;
                    movie.actors = (reqData.actors) ? reqData.actors : movie.actors;
                }
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                result: 'success'
            }));
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                result: 'fail'
            }));
        }
    });
}

function deleteMovie(id, res) {
    console.log('DeleteMovie......');
    var resultMsg = '';
    for (var i = 0; i < movieList.length; i++) {
        var movie = movieList[i];
        if (movie.id == id) {
            movieList.splice(i, 1);
            resultMsg = 'success';
        }
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    if (resultMsg != '') {
        res.end(JSON.stringify({
            result: resultMsg
        }));
    } else {
        res.end(JSON.stringify({
            error: {
                code: 404,
                result: 'not found'
            }
        }));
    }
}