const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

var app = express();
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Secret Key'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/login', handleLogin);
app.get('/logout', handleLogout);
app.get('/personal', showPersonalPage);
app.listen(3000);

function handleLogout(req, res){
    req.session.destroy(function(err){
        res.send('Success Logout');
    })
}

function handleLogin(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    console.log(id, "/", pw);
    if (id === 'user' && pw === '1234') {
        req.session.userid = id;
        res.send('Success');
    } else {
        res.send('Fail');
    }
}

function showPersonalPage(req, res) {
    var id = req.session.userid;
    if (id) {
        res.send('Private Page for : ' + id);
    } else {
        res.sendStatus(401);
    }
}