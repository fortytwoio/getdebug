getdebug
========

[![NPM version](https://badge.fury.io/js/getdebug.svg)](http://badge.fury.io/js/getdebug)

Returns a [visionmedia/debug](visionmedia/debug) instance with the namespace set to a prefixed application name. The path to the javascript file gets relatively namespaced based on the absolute path and the given namespace in the actual node module


## Installation

    $ npm install getdebug
    
## Usage

```js

// myapp/index.js
var getDebug = require("getdebug")(process.env.APP_NAME, __dirname);

// e.g. set with express as a "global" setting
app.set("getdebug", getDebug);


// in myapp/lib/controllers/foo.js
var getDebug = app.get("getdebug");
var debug = getDebug(__filename)

debug("Hello from here");
```

This is what you will see:

    $ APP_NAME=example node myapp/index.js
    example(27720):lib:controllers:foo Hello from here +1ms

## License

MIT
