const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(require('./movieRouter'));
app.use(handleErrors);

app.listen(3000);

function handleErrors(err, req, res, next) {
    res.status(err.code).send({
        msg: err.message
    });
}