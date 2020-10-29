# HTTP

Hyper Text Transfer Protocol

refer to [Node.js docs : HTTP](https://nodejs.org/dist/latest-v12.x/docs/api/http.html)

refer to [MDN web docs : HTTP](https://developer.mozilla.org/docs/Web/HTTP)

## HTTP Commmunication Simple Flow

Web browser > Entire Address > Request > Web Server > Response > Web browser

## URL (Uniform Resource Locator)

```url
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

## HTTP messages

HTTP messages are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server.
refer to [MDN web docs : HTTP Messages](https://developer.mozilla.org/docs/Web/HTTP/Messages)

__**Basic Structure**__

_*Start-Line*_

A start-line describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.

_*HTTP Headers*_

An optional set of HTTP headers specifying the request, or describing the body included in the message.

refer to [MDN web docs : HTTP headers](https://developer.mozilla.org/docs/Web/HTTP/Headers)

_*blank(empty) line*_

A blank line indicating all meta-information for the request has been sent.(CRLF)

_*Body*_

An optional body containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

__**HTTP Requests**__

_*Start Line*_

Method, Path, Version of the protocol

_*Request Methods*_

* GET
* POST
* PUT
* DELETE
* PATCH
* CONNECT
* HEAD
* OPTIONS
* TRACE

_*Headers*_

* General Headers Via, Connection, Upgrade-Insecure-Requests...

* Request Headers : Host, User-Agent, Accept, Accept-Type...

* Entity Headers : Content-Type, Content-Length...

_*Body*_

The final part of the request is its body. Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one. Some requests send data to the server in order to update it: as often the case with POST requests (containing HTML form data).

* Single-resource bodies : consisting of one single file, defined by the two headers: Content-Type and Content-Length.

* Multiple-resource bodies : consisting of a multipart body, each containing a different bit of information. This is typically associated with HTML Forms.

__**HTTP Response**__

_*Status Line*_

version of the protocol, Status code, Status text

_*Status Codes*_

* Informational responses (100–199),
* Successful responses (200–299),
* Redirects (300–399),
* Client errors (400–499),
* and Server errors (500–599).

refer to [MDN web docs : HTTP response status codes](https://developer.mozilla.org/docs/Web/HTTP/Status)

_*Headers*_

* General Headers : Via, Connection, Date, Keep-Alive, Transfer-Encoding...

* Response Headers : Access-Control-Allow-Origin...

* Entity Headers : Content-Type, Content-Length, Content-Encoding, Last-Modified...

_*Body*_

The last part of a response is the body. Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload (like 201 Created or 204 No Content) usually don't.

HTML, XML/JSON, Octet Stream...

* Single-resource bodies : consisting of a single file of known length, defined by the two headers: Content-Type and Content-Length. consisting of a single file of unknown length, encoded by chunks with Transfer-Encoding set to chunked.

* Multiple-resource bodies : consisting of a multipart body, each containing a different section of information. These are relatively rare.

__**Content-Type**__

The Content-Type entity header is used to indicate the media type of the resource.

refer to [MDN web docs : MIME types (IANA media types)](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## APIs based on HTTP

When writing code for the Web, there are a large number of Web APIs available.

refer to [MDN web docs : Web APIs](https://developer.mozilla.org/docs/Web/API)

### User Agent

A user agent is a computer program representing a person, for example, a browser in a Web context.

refer to [MDN web docs : USer Agent](https://developer.mozilla.org/docs/Glossary/User_agent)

### XMLHttpRequest(XHR)

XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

refer to [MDN web docs : XMLHttpRequest](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)

### Fetch

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

refer to [MDN web docs : Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API)

### Server-sent events

With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page.

refer to [MDN web docs : Server-sent events](https://developer.mozilla.org/docs/Web/API/Server-sent_events)

[EventSource polyfill for Node.js](
https://github.com/EventSource/eventsource)

## HTTP Module for Node.js

refer to [Node.js docs : HTTP](https://nodejs.org/dist/latest-v12.x/docs/api/http.html)

### How to use HTTP Module

```javascript
var http = require('http');
```

### Classes

#### http.Agent

#### http.ClientRequest

#### http.Server

#### http.ServerResponse

#### http.IncomingMessage

#### http.OutgoingMessage
