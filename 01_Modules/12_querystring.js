/**
 * Query String
 * Body of HTTP Messages
 * 
 * querystring.parse() // Parsing a querystring
 * 
 * querystring.stringify() // Object to serialize into a querystring
 */

 const querystring = require('querystring');
 
 var parsedData = querystring.parse('group=Company&name=Samsung');
 console.log("Parsed Data : ", parsedData);

 var makeQuery = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: ''});
 console.log("Make a QueryString : ", makeQuery);