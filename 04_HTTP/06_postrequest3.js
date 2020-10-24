const http = require('http');
const fs = require('fs');
const pathUtil = require('path');
const formidable = require('formidable');

var moviList = [];

var imageUrl = '/06_images';
var uploadDir = __dirname + '/06_upload';
var imagesDir = __dirname + imageUrl;

var server = http.createServer(function (req, res) {

    if (req.url == '/' && req.method.toLocaleLowerCase() == 'get') {
        console.log('Request : Get / ');
        showMovieList(res);
    } else if (req.method.toLocaleLowerCase() == 'get' && req.url.indexOf(imageUrl) == 0) {
        console.log('Request : Get images... ');
        findImageDisplay(req, res);
    } else if (req.url == '/' && req.method.toLocaleLowerCase() == 'post') {
        console.log('Request : Post addMovieList...');
        addMovieList(req, res);
    }
});

server.listen(3000, function () {
    console.log('Server is running on 3000');
});

function showMovieList(res) {
    var body = `<!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movie List Board</title>
        <style>
            li {
                list-style: none;
                position: relative;
            }

            div.list {
                display: flex;
                flex-wrap: wrap;
            }
    
            div.card {
                border-radius: 5px 5px;
                box-shadow: 2px 2px 10px 2px gray;
                width: 200px;
                padding: 5px;
                text-align: center;
                margin: 5px;
            }
    
            div.image {
                display: inline;
            }
    
            div.text {
                display: inline;
                padding: 5px 5px;
                vertical-align: top;
                text-align: left;
            }
    
            p {
                margin: 0;
            }
        </style>
    </head>
    
    <body>
        <h1>Favorite Movie List</h1>
        <div class='list'>`;

    moviList.forEach(function (item) {
        body += `<div class='card'>
            <div class='image'>`
        if (item.image && item.image.indexOf('.jpg') > 0) {
            body += `<img src="${item.image}" style="height: 150px;">`
        }
        body += `</div>
            <div class='text'>
            <p>Title : ${item.title}</p>
            <p>Director : ${item.director}</p>
            <p>Year : ${item.year} </p>
            </div>
            </div>`;
    });

    body += `</div>
        <div>
            <form method="post" enctype="multipart/form-data" action=".">
                <table>
                    <thead>
                        <th colspan="2" style="text-align: center;">Enter New Movie</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>Movie Title : </label>
                            </td>
                            <td>
                                <input type="text" name="title" placeholder="Title">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Director Name : </label>
                            </td>
                            <td>
                                <input type="text" name="director" placeholder="Director">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Created Year : </label>
                            </td>
                            <td>
                                <input type="number" name="year" placeholder="Year">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Poster Image : </label>
                            </td>
                            <td>
                                <input type="file" name="image" value="Select a File">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="upload">
                </div>
            </form>
        </div>
    </body>
    
    </html>`;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(body);
}

function findImageDisplay(req, res) {
    var path = __dirname + req.url;
    res.writeHead(200, {
        'Content-Type': 'image/jpeg'
    })
    fs.createReadStream(path).pipe(res);
}

function addMovieList(req, res) {
    var form = formidable.IncomingForm();
    form.uploadDir = uploadDir;

    form.parse(req, function (err, field, files) {
        var title = field.title;
        var director = field.director;
        var year = field.year;
        var image = files.image;

        var date = new Date();
        var newImageName = `image_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
        var originName = pathUtil.parse(image.name);
        var ext = originName.ext;

        var newPath = `${imagesDir}/${newImageName}${ext}`;

        fs.renameSync(image.path, newPath);

        var url = `${imageUrl}/${newImageName}${ext}`;

        var info = {
            title: title,
            director: director,
            year: year,
            image: url
        }

        moviList.push(info);

        res.statusCode = 302;
        res.setHeader('Location', '.');
        res.end('Success');

    });
}