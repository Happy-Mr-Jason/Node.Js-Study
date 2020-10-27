const express = require('express');
const morgan = require('morgan');

var app = express();

//app.use(morgan('dev'));
//app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms'));
app.use(morgan(function(tokens, req, res){
    return [
        tokens['date'](req, res, 'clf'),
        tokens.method(req,res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms'
    ].join(' ');
}));

app.get('/', function(req, res){
    res.send('Hello World');
});
app.get('/html', function(req, res){
    res.send('This is html page');
});
app.get('/hello', function(req, res){
    res.send('Hello~~~~');
});

app.listen(3000);