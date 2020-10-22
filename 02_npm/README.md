/**
 * 
 * npm site
 * https://www.npmjs.com/
 * 
 * npm Documentation site
 * https://docs.npmjs.com/
 * 
 * It is better to Use Local Library for Dependency of specific version
 * 
 * Added modules
 * npm install async    : https://caolan.github.io/async/v3/    [Powerful AsyncFunction()]
 * npm install jade     //deprecated//  use 'pug' instead of jade 
 * npm install pug      : https://pugjs.org/                    [HTML Rendering]
 * npm install pm2      : https://pm2.keymetrics.io/            [Process Management]
 * npm install mocha    : https://mochajs.org/                  [JavaScript test framework]
 * npm install express  : http://expressjs.com/                 [Web framework]
 * npm install -g nodemon : https://nodemon.io/                 [Automatically restarting the node application ]
 * nodemon Example
 * nodemon ./server.js localhost 8080
 * 
 * npm list : View of Module list
 * 
 * npm uninstall jade //Remove Module
 * 
 * npm install -g mocha //Global Use
 * 
 * Package Configuration File ( package.json ) Create it using 'npm init'
 * npm init //package.json
 * 
 * dependecies : Packages required by your application in production
 * devDependencies : Packages that are only needed for local development and testing
 * Add dependencies when modules installed.
 * Example
 * npm install async --save-prod       [dependencies]
 * npm install mocha --save-dev   [devDependencies]
 * 
 * Update Npm Modules
 * npm install   // read the 'pakage.json' and install modules, when share the package with your team members.
 * npm update
 * 
 * Sample.......context of package.json
 * {
 *  "name": "package_sample",
 *  "version": "1.0.0",
 *  "main": "main.js",
 *  "description": "Package description"
 *  "scripts": {
 *      "test": "echo \"Error: no test specified\" && exit 1"
 *  },
 *  "author": "",
 *  "license": "ISC"
 * 
 *  "dependencies": {
 *      "async": "^1.5.0"
 *  },
 *  "devDependencies": {
 *      "mocha": "^2.3.4"
 *  }
 * 
 * }
 * 
 * 
 * Create Custom Module
 * // XXXXX means module's function name, class name or object name
 * module.exports.XXXXX = function(){}  
 * module.exports = XXXXX;
 * exports.XXXXX = function(){}
 * 
 * Use Custom module
 * require('./mymodule.js);
 * 
 */