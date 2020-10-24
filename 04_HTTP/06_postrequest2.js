/**
 * File Upload Using Post
 * 
 * for handling the multipart Message. 
 * Use 'formidable' Module. It similar to 'multer'.
 */

const http = require('http');
const fs = require('fs');
const pathUtil = require('path');
const formidable = require('formidable');

var imageBaseUrl = '/06_images';
var uploadDir = __dirname + '/06_upload';
var imageDir = __dirname + imageBaseUrl;

var paintList = [];

var server = http.createServer(function (req, res) {

    console.log("Request URL : ", req.url);

    if (req.url == '/' && req.method.toLocaleLowerCase() == 'get') {
        console.log("Show List.....");
        showList(res);
    } else if (req.method.toLocaleLowerCase() == 'get' && req.url.indexOf(imageBaseUrl) == 0) {
        console.log("Display image.....");
        var path = __dirname + req.url;
        res.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        fs.createReadStream(path).pipe(res);
    } else if (req.method.toLocaleLowerCase() == 'post') {
        console.log("Add Paint.....");
        addNewPaint(req, res);
    }
});

server.listen(3000, function () {
    console.log('Server is running on 3000');
});

function showList(res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var body = `<html><head><meta charset="URF-8"></head><body><h3>Favorite Paint</h3>
    <ul>`;
    paintList.forEach(function (item, index) {
        if (item.image) {
            body += `<li><img src="${item.image}" style="height:100pt"></img>`;
        }
        body += `${item.title}</li>`;
    });
    body += `</ul><form action="." method="post" enctype="multipart/form-data">
    <div><label>Paint Title : </label><input type="text" name= "title"></div>
    <div><label>Paint Image File : </label><input type="file" name= "image" value="Select a File"
    ></div>
    <input type="submit" value="upload"></form></body></html>`;

    res.end(body);
}

function addNewPaint(req, res) {
    //Create Form Object
    var form = formidable.IncomingForm();
    form.uploadDir = uploadDir;

    //Parsing Request
    //fields : value datas (key : value)
    //files : Files (key : File)
    form.parse(req, function (err, fields, files) {
        var title = fields.title;
        var image = files.image;

        console.log(image);

        var date = new Date();
        var newImageName = `image_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
        var originName = pathUtil.parse(image.name);
        var ext = originName.ext;

        var newPath = `${imageDir}/${newImageName}${ext}`;

        fs.renameSync(image.path, newPath);

        var url = `${imageBaseUrl}/${newImageName}${ext}`;

        var info = {
            title: title,
            image: url
        };

        paintList.push(info);

        res.statusCode = 302;
        res.setHeader('Location', '.');
        res.end('Success');
    });
}