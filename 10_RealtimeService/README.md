# Realtime Service using Socket

## TCP

Stream Socket

- Need Connection
- Trust Data Transfer
- Flow Control
- Slower than UDP
- Trust Realtime Communication
- FTP, HTTP, SMTP

Using Stream

- Send : Write Stream
- Receive : Read Stream

## UDP

Datagram Socket

- Don't need Connection
- No Trust Data Transfer
- No Control
- Faster than TCP
- Streaming Video / Audio
- DNS, DHCP, SNMP

## Module for Socket

```javascript
const net = require('net');
```

Socket Server

```javascript
net.Server
net.createServer(function(socket){});
```

Socket

```javascript
net.Socket
```

## Module for UDP

```javascript
const net = require('dgram');
```

Socket

```javascript
dgram.Socket
dgram.createSocket(type[,callback])
```
