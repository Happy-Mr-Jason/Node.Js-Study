const express = require('express');
const winston = require('winston');
var app = express();

var setup = {
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {
        service: 'user-service'
    },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: './logs/combined.log'
        })
    ]
}
const logger = winston.createLogger(setup);

app.get('/', function (req, res) {
    logger.info('Request /');
    res.send('Hello World');
});

app.get('/html', function (req, res) {
    logger.info('Request /html')
    res.send('This is html page');
});

app.get('/hello', function (req, res) {
    logger.info('Request /hello');
    res.send('Hello~~~~');
});

app.get('/data/:value', function (req, res) {
    logger.info('Request /data/' + req.params.value);
    var parsedValue = parseInt(req.params.value);
    if (!parsedValue)
        return logger.error('This is not Number /data/' + req.params.value);
    res.send('Result : ' + parsedValue);
});

app.use(errorHandler);

app.listen(3000);

function errorHandler(err, req, res, next) {
    logger.error('Error occured~!!!');
    res.status(500).send('Error~!!');
}