const express = require('express');
const {
    parse
} = require('fast-xml-parser');
var app = express();
var port = 3000;

app.get('/:value', [checkValue, displayResult1, displayResult2]);
app.use(errorHandler);

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${port}`);
});

function checkValue(req, res, next) {
    console.log('Checking value...');
    var number = parseInt(req.params.value);
    if (!number) {
        var error = new Error('This is not Integer');
        // Skip the next step(displayResult1, displayResult2) 
        // and move on to the next error handler(errorHandler).
        next(error);
        return;
    }
    next();
}

function displayResult1(req, res, next) {
    console.log('Value is number');
    next();
}

function displayResult2(req, res) {
    console.log('OK Display the Value');
    res.send('Result : ' + req.params.value);
}

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Error');
}