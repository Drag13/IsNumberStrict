# IsNumberStrict

[![Build Status](https://travis-ci.org/Drag13/IsNumberStrict.svg?branch=master)](https://travis-ci.org/Drag13/IsNumberStrict)
[![codecov](https://codecov.io/gh/Drag13/isnumberstrict/branch/master/graph/badge.svg)](https://codecov.io/gh/Drag13/isnumberstrict)
[![TypeSCript](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://github.com/Drag13/IsNumberStrict)
[![GitHub license](https://img.shields.io/github/license/Drag13/WhenDo.svg)](https://github.com/Drag13/IsNumberStrict/blob/master/LICENSE)


Designed to strictly check if value can be treated as a number. Works with Number objects, hex an so on. Returns false for strings and other not numbers like {}, undefined, NaN

## Install

```cmd
npm i is-number-strict
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
