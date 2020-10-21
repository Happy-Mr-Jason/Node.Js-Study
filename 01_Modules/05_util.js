/**
 * Utility Module
 * 
 * Functions --------
 * String Formatter
 * 
 * Placeholders
 * %s : String
 * %d : Number
 * %j : JSON
 * 
 * Inheritance class or function
 * util.inherits(Constructor, super Constructor);
 * inter 2 functions
 */

 var util = require('util');

 var str1 = util.format('%d + %d = %d', 1, 2, (1+2));
 console.log(str1);
 var str2 = util.format('%s is %dpercent %s', 'Tom', 100, 'Human');
 console.log(str2);

//  class Parent{}
//  class Child{}
 function Parent(){}
 function Child(){}
 Parent.prototype.sayHello = function(){
    console.log('Hello. from Parent Class');
 };
 
 util.inherits(Child, Parent);

 var child = new Child();
 child.sayHello();
