# IsNumberStrict

Designed to strictly check if value can be treated as a number. Works with Number objects, hex an so on. Returns false for strings and other not numbers like {}, undefined, NaN

## Install

```cmd
npm i 'is-number-strict'
```

## Usage

JavaScript with require syntax

```javascript
const isnumber = require('is-number-strict').default;

console.assert(isnumber(5));
console.assert(!isnumber('5'));
```

JavaScript with import syntax

```javascript
import isnumber from "is-number-strict";

console.assert(isnumber(5));
console.assert(!isnumber('5'));
```