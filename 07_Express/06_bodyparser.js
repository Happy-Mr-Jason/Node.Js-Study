const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//test using postman
app.use(function(req, res){
    var titleData = req.body.title;
    var valueData = req.body.value;
    res.send('Title : ' + titleData + ' Value : ' + valueData);
});

app.listen(3000);