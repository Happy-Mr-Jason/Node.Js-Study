/**
 * URL
 * Protocol
 * Host
 * Port
 * Path
 * Query
 * Fragment
 * url.parse // deprecated!! Use WHARWG URL API
 * 
 * Make url
 * url.format(urlObj);
 */

const url = require('url');

var urlStr = 'http://host.com/path3?group=Company&name=Samsung';

var _url = new URL(urlStr);

console.log(_url);

/**
 * Print Result
 * 
 URL {
 href: 'http://host.com/path3?group=Company&name=Samsung',
 origin: 'http://host.com',
 protocol: 'http:',
 username: '',
 password: '',
 host: 'host.com',
 hostname: 'host.com',
 port: '',
 pathname: '/path3',
 search: '?group=Company&name=Samsung',
 searchParams: URLSearchParams { 'group' => 'Company', 'name' => 'Samsung' },
 hash: ''
 }
*/

console.log("QueryString : ", _url.searchParams);
var queryStr = _url.searchParams.entries();
var queryStr2 = _url.searchParams.toString();
console.log("group :", _url.searchParams.get('group'));
console.log("name :", _url.searchParams.get('name'));
console.log("queryParams :", queryStr);
console.log("queryParams :", queryStr.next());
console.log("queryParams :", queryStr.next());
console.log("queryParams :", queryStr2);

var urlObj = {
    protocol: 'http',
    host: 'host2.com',
    pathname: '/it/path2',
    search: 'type=IT&size=Big'
}

var urlStr2 = url.format(urlObj);
var _url2 = new URL(urlStr2);
console.log(urlStr2);
console.log(_url2);