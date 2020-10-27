const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);