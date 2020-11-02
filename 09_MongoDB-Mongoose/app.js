const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));
app.use(require('./router'));
app.use(handleError);

app.listen(3000);

function handleError(err, req, res, next){
    if(err){
        res.status(err.code).send({Message : err.message});
    }
}