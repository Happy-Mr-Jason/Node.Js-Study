# Debug, Test, Processing

## Debug

```command
Depricated!!!! node --debug server.js
Depricated!!!! node --degbug-brk server.js
node --inspect
node --inspect-brk
```

~~## Node-Inspector~~

refer to [npm Node Inspector](https://www.npmjs.com/package/node-inspector)

refer to [Node Inspector](https://github.com/node-inspector/node-inspector)

```command
npm install -g node-inspector
```

__**Strat**__

```command
node-debug[-brk] app.js
```

### IDE debug

__**Launch**__

- excute script for debug
- don't need app working
- launch.json

__**Attach**__

- connect a working process on debug mode
- after app start

## Test

__**Assert**__

```javascript
const assert = require('assert');
assert.ok(value[,message]);
assert.equal(actual, expected[, message]);
assert.throws(block[, error][,message]);
```

__**should**__

```command
npm install should
```

```javascript
var intVal = 5;
intVal.should.ASSERT
```

__**mocha**__

```command
npm install mocha
```

## Continuous Process

__**forever**__

```command
npm install forever -g
```
