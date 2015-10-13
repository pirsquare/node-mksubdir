# mksubdir
[![Build Status](https://travis-ci.org/pirsquare/node-mksubdir.svg?branch=master)](https://travis-ci.org/pirsquare/node-mksubdir)

Simple way to create directories recursively in nodejs.

## Installation

    npm install mksubdir

## Examples
```javascript
var mksubdir = require('mksubdir');
mksubdir("/foo/bar/baz");
mksubdir("/foo/bar/baz"); // Will ignore if directories already exist
```

## Testing

    npm test