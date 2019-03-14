# Peer-to-Peer
The `rtmcore-p2p` module provides peer-to-peer networking capabilities for [rtmcore](https://github.com/Raptor3um/rtmcore), and includes [Peer](peer.md) and [Pool](pool.md) classes. A [Message](messages.md) class is also exposed, in addition to [several types of messages](messages.md). Pool will maintain connection to several peers, Peers represents a node in the raptoreum network, and Message represents data sent to and from a Peer. For detailed technical information about the raptoreum protocol, please visit the [Protocol Specification](https://en.bitcoin.it/wiki/Protocol_specification) on the Bitcoin Wiki.

## Installation
Peer-to-peer is implemented as a separate module.

For node projects:

```bash
npm install rtmcore-p2p --save
```

## Quick Start

```javascript
var Peer = require('rtmcore-p2p').Peer;
var peer = new Peer({host: '5.9.85.34'});

// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});

peer.connect();
```
