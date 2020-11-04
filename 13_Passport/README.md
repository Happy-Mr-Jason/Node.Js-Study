# Using Passport Module

Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies.

refer to [Passport](http://www.passportjs.org/)

refer to [npm passport](https://www.npmjs.com/package/passport)

__**Strategies**__

Passport uses the concept of strategies to authenticate requests. Strategies can range from verifying username and password credentials, delegated authentication using OAuth (for example, via Facebook or Twitter), or federated authentication using OpenID.

__**Installation**__

```command
npm install passport
```

Local Auth and OAuth

__**OAuth(Open Authorization)**__

OAuth, which stands for “Open Authorization,” allows third-party services to exchange your information without you having to give away your password.

__**Sample**__

_*Configure Strategy*_

Local

```javascript
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

Github

```javascript
const GitHubStrategy = require('passport-github').Strategy;
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

_*Authenticate Requests*_

Local

```javascript
app.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}), function(req, res){
    res.redirect('/');
});
```

Github

```javascript
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```
