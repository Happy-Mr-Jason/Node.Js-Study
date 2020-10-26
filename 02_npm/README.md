# npm [Node Package Manager]
## What is npm?
npm is the world's largest Software Library (Registry)

npm is also a software Package Manager and Installer

## npm web site
visit [www.npmjs.com](https://www.npmjs.com/)

## npm Docs
visit [npm Docs](https://docs.npmjs.com/)

 ## npm Commands
 ### Init Package.json(Package configuration file)
 make a package.json with default questions
 ```
 npm init
 ```
 ### Install Package
 ```
 npm install PackageName [Options]
 ```
 ### Install Global Package
 ```
 npm install -g PackageName
 ```
 ### Install With 'dependencies' or 'devDependencies' in package.json
 dependecies : Packages required by your application in production
 ```
 npm install PackageName --save-prod
 ```
 devDependencies : Packages that are only needed for local development and testing
 ```
 npm install PackageName --save-dev
 ```
 ### Uninstall Package
 ```
 npm uninstall PackageName
 ```
 ### View of Package list
 ```
 npm list
 ``` 
 ### Update Packages
 You can share 'package.json' to your team.
 copy this file to other members source's root. and run as below.
 ```
 npm install
 ```
 or
 ```
 npm update
 ```

 Example : package.json
 ```
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
powerful Async-Functions. refer to https://caolan.github.io/async/v3/
```
npm install async
```
### pug
html renderer. instead of 'jade(deprecated)'. refer to https://pugjs.org/
```
npm install pug
```
### pm2
process management. refer to https://pm2.keymetrics.io/
```
npm install pm2
```
### mocha
javascript test framework. refer to https://mochajs.org/
```
npm install mocha
```
### express
web framework. refer to http://expressjs.com/
```
npm install express
```
### nodemon
automatically restarting the node applications. refer to https://nodemon.io/
```
npm install -g nodemon
```
using nodemon
```
nodemon test.js
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