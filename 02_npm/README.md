# npm [Node Package Manager]

npm is the world's largest Software Library (Registry)

npm is also a software Package Manager and Installer

## npm web site

visit [www.npmjs.com](https://www.npmjs.com/)

## npm Docs

visit [npm Docs](https://docs.npmjs.com/)

## npm Commands

### Init Package.json(Package configuration file)

make a package.json with default questions

```command
npm init
```

### Install Package

```command
npm install PackageName [Options]
```

### Install Global Package

```command
npm install -g PackageName
```

### Install With 'dependencies' or 'devDependencies' in package.json

dependecies : Packages required by your application in production

```command
npm install PackageName --save-prod
```

devDependencies : Packages that are only needed for local development and testing

```command
npm install PackageName --save-dev
```

### Uninstall Package

``` command
npm uninstall PackageName
```

### View of Package list

```command
npm list
```

### Update Packages

You can share 'package.json' to your team.
copy this file to other members source's root. and run as below.

```command
npm install
```

or

```command
npm update
```

Example : package.json

```json
{
"name": "package_sample",
"version": "1.0.0",
"main": "main.js",
"description": "Package description"
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"

"dependencies": {
    "async": "^1.5.0"
},
"devDependencies": {
    "mocha": "^2.3.4"
}
}
```

## Recommand

It is better to Use Local Library for Dependency of specific version

## Recommanded packages for Tutorial

### async

powerful Async-Functions. refer to [async](https://caolan.github.io/async/v3/)

```command
npm install async
```

### pug

html renderer. instead of 'jade(deprecated)'. refer to [pug](https://pugjs.org/)

```command
npm install pug
```

### pm2

process management. refer to [pm2](https://pm2.keymetrics.io/)

```command
npm install pm2
```

### mocha

javascript test framework. refer to [mocha](https://mochajs.org/)

```command
npm install mocha
```

### express

web framework. refer to [express](http://expressjs.com/)

```command
npm install express
```

### nodemon

automatically restarting the node applications. refer to [nodemon](https://nodemon.io/)

```command
npm install -g nodemon
```

using nodemon

```command
nodemon test.js
```

### assert

 The assert module provides a set of assertion functions for verifying invariants. refer to [npm assert](https://www.npmjs.com/package/assert)

```command
npm install assert
```

## Create Customs Module (Export Module)

xxxxxx : name of the function, class or object.

```javascript
module.exports.XXXXX = function(){}  
module.exports = XXXXX;
exports.XXXXX = function(){}
```

ex) in module source : excercise.js

``` javascript
function Exercise(){

}

Exercise.prototype.run = function (){
    console.log('run~!');
}

module.exports = Exercise;
```

 ex) for use exported module

``` javascript
const Exercise = require('./exercise.js');
var exercise = new Exercise();
exercise.run();
```
