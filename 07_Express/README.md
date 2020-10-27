# Express Framework

refer to [Expressjs.com](http://expressjs.com/)

## Installation

```
npm install express
```

### Basic Code

```javascript
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
```

## Express application generator

refer to [Express application generator](http://expressjs.com/en/starter/generator.html)

## Routing

```javascript
app.METHOD(PATH, HANDLER);
```

#### Route methods(Basic routing)

Example

```javascript
// Get Request
app.get("/", function (req, res) {
  res.send("Hello World");
});
// POST Request
app.post("/", function (req, res) {
  res.send("Got a POST request");
});
// PUT Request
app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});
// DELETE Request
app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});
```

#### Route paths

refer to [Express Guide : Routing](http://expressjs.com/en/guide/routing.html)

#### Route parameters

refer to [Express Guide : Routing](http://expressjs.com/en/guide/routing.html)

#### Route handlers

refer to [Express Guide : Routing](http://expressjs.com/en/guide/routing.html)

#### app.route()

refer to [Express Guide : Routing](http://expressjs.com/en/guide/routing.html)

#### express.Router

refer to [Express Guide : Routing](http://expressjs.com/en/guide/routing.html)

## Middleware

refer to [Express Guide : Writing middleware](http://expressjs.com/en/guide/writing-middleware.html)

refer to [Express Guide : Using middleware](http://expressjs.com/en/guide/using-middleware.html)

### How to use Middleware

```javascript
//if there is no Path, the route is the root path (/).
app.use([Path], function[,function...]);
```

### Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

### Types of middleware

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

### Serving static files in Express

```javascript
express.static(root, [option]);
```

Example

```javascript
app.use(express.static("public"));
app.use("/static", express.static("public"));
```

## Express API reference

refer to [Express API reference](http://expressjs.com/en/4x/api.html)

### Express()

crates an Express application. top-level function

refer to [Express API reference : express()](http://expressjs.com/en/4x/api.html#express)

#### Methods

- express.json([options])
- express.raw([options])
- express.Router([options])
- express.static(root, [options])
- express.text([options])
- express.urlencoded([options])

### Application Object

refer to [Express API reference : Application](http://expressjs.com/en/4x/api.html#app)

#### Properties

- app.locals
- app.mountpath

#### Methods

- app.get()
- app.listen()
- app.METHOD()
- app.route()
- app.set()
- app.use()

### Request Object

refer to [Express API reference : Reqeust](http://expressjs.com/en/4x/api.html#req)

#### Properties

- req.app
- req.query
- req.path
- req.params
- req.cookie
- req.body ...

#### Methods

- req.get()
- req.param()
- req.accepts() ...

### Response Object

refer to [Express API reference : Reqeust](http://expressjs.com/en/4x/api.html#res)

#### Properties

- res.app
- res.headerSent
- res.locals

#### Methods

- res.download()
- res.end()
- res.json()
- res.jsonp()
- res.redirect()
- res.render()
- res.send()
- res.sendFile()
- res.sendStatus() ...

### Router Object

refer to [Express API reference : Router](http://expressjs.com/en/4x/api.html#router)

#### Methods

- router.all()
- router.METHOD()
- router.param()
- router.route()
- router.use()

## ThirdParty Middlewares

### serve-favicon

reqeust favicon

refer to [npm serve-favicon](https://www.npmjs.com/package/serve-favicon)

#### Installation

```
npm install serve-favicon
```

#### Example

```javascript
var express = require("express");
var favicon = require("serve-favicon");
var path = require("path");

var app = express();
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Add your routes here, etc.

app.listen(3000);
```

### morgan

Logging

refer to [npm morgan](https://www.npmjs.com/package/morgan)

#### Installation

```
npm install morgan
```

#### Example

```javascript
morgan(format, options);
```

### winston

Logging with Transports

refer to [npm winston](https://www.npmjs.com/package/winston)

#### Installation

```
npm install winston
```

#### Transports

##### winston-daily-rotate-file

refer to https://github.com/winstonjs/winston-daily-rotate-file

###### Installation

```
npm install winston-daily-rotate-file
```

### body-parser

Parse incoming request bodies in a middleware before your handlers, available under the req.body propert (Except Multipart body, use 'formidable' module)
refer to [npm body-parser](https://www.npmjs.com/package/body-parser)

#### Installation

```
npm install body-parser
```

### method-override

Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
refer to [npm method-override](https://www.npmjs.com/package/method-override)

#### Installation

```
npm install method-override
```

## Template Engine

refer to [Express Guide : Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html)

### How to us template Engine

```javascript
//
app.set('views', [TemplatePath]);
app.set('view engine', [Template Engine]);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

```

### EJS

refer to [npm Embedded JavaScript Templates](https://www.npmjs.com/package/ejs)

#### Installation

```
npm install ejs
```

#### File extension of view

.ejs

#### Tags

- <% 'Scriptlet' tag, for control-flow, no output
- <%\_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
- <%= Outputs the value into the template (escaped)
- <%- Outputs the unescaped value into the template
- <%# Comment tag, no execution, no output
- <%% Outputs a literal '<%'
- %%> Outputs a literal '%>'
- %> Plain ending tag
- -%> Trim-mode ('newline slurp') tag, trims following newline
- \_%> 'Whitespace Slurping' ending tag, removes all whitespace after it

### PUG

refer to [npm pug](https://www.npmjs.com/package/ejs)

#### Installation

```
npm install pug
```

#### File extension of view

.pug

### Mustache

refer to [npm mustache.js - Logic-less {{mustache}} templates with JavaScript](https://www.npmjs.com/package/mustache)

#### Installation

```
npm install mustache --save
```
