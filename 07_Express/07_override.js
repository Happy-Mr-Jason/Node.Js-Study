const express = require('express');
const methodOverride = require('method-override');

var app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method')) //             Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) //    Google/GData
app.use(methodOverride('X-Method-Override')) //         IBM

app.get('/', function (req, res) {
    res.send('Request GET');
});
app.post('/', function (req, res) {
    res.send('Request POST');
});
app.put('/', function (req, res) {
    res.send('Request PUT');
});
app.delete('/', function (req, res) {
    res.send('Request DELETE');
});

app.listen(3000);