/**
 * Path
 * path.parse
 * path.sep // serperator
 * path.join() // join paths
 * path.format() // made by object
 */

 const path = require('path');

 var parsed = path.parse('/user/tmp/local/image.png');

 console.log(parsed);
 console.log(parsed.base);
 console.log(parsed.ext);