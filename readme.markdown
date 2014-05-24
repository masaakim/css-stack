# css-stack [![Build Status](https://travis-ci.org/morishitter/css-stack.svg)](https://travis-ci.org/morishitter/css-stack)

Analize stacking contexts and stack level

## Installation

```shell
$ npm install css-stack
```

## Example

```javascript
var stack = require('css-stack');
var css = fs.readFileSync('target.css').toString();

stack.list(css);
// return selectors have stacking context

stack.level(css);
// return all of `z-index` values
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
