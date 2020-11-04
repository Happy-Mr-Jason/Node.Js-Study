const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'Secret Key'
}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

var LocalStrategy = require('passport-local').Strategy;
var strategy = new LocalStrategy(function (username, password, done) {
    if (username === 'user' && password === '1234') {
        var userinfo = {
            name: 'First User',
            email: 'user@mail.com'
        };
        done(null, userinfo);
    } else {
        done(null, false, 'Login Fail');
    }
});

passport.use(strategy);

passport.serializeUser(function (user, done) {
    console.log('Write the info to Session');
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log('Read the info from Session');
    done(null, user);
});

app.get('/', function(req, res){res.send('This is Home~')});

app.post('/login', passport.authenticate('local'), function (req, res) {
    res.send('Login Success');
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/personal', showPersonal);
app.listen(3000);

function showPersonal(req, res) {
    var user = req.user;
    if (user) {
        res.send('Personal Page ' + user.name);
    } else {
        res.sendStatus(401);
    }
}