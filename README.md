# IsNumberStrict

[![Build Status](https://travis-ci.org/Drag13/IsNumberStrict.svg?branch=master)](https://travis-ci.org/Drag13/IsNumberStrict)
[![codecov](https://codecov.io/gh/Drag13/isnumberstrict/branch/master/graph/badge.svg)](https://codecov.io/gh/Drag13/isnumberstrict)
[![TypeSCript](https://img.shields.io/badge/TypeScript-Ready-brightgreen.svg)](https://github.com/Drag13/IsNumberStrict)
[![GitHub license](https://img.shields.io/github/license/Drag13/WhenDo.svg)](https://github.com/Drag13/IsNumberStrict/blob/master/LICENSE)

Designed to strictly check if the value can be treated as a number. Works with Number objects, hex an so on. Returns false for strings and other not numbers like {}, undefined, NaN

## Install

```cmd
npm i is-number-strict
```

## Usage

JavaScript with require syntax

```javascript
const isNumber = require('is-number-strict').default;

console.assert(isNumber(5));
console.assert(!isNumber('5'));
```

JavaScript with import syntax

```javascript
import isNumber from "is-number-strict";

console.assert(isNumber(5));
console.assert(!isNumber('5'));
```

## What problem it solves

This tiny lib tries to make type assertion little bit more predictable and remove NaN from your calculations.

```javascript
typeof new Number(42);
> 'object'
```

But it is working as good old number

```javascript
new Number(5) * new Number(6);
> 30
```

So:

```javascript
isNumberStrict(new Number(5));
> true
```

But:

```javascript
isNumberStrict('5');
> false
```

And 

```javascript
isNumberStrict(NaN);
> false
```

> Why didn't you treat '5' as a number? '5' + 5 = 10!
Yes, but 5 + '5' = '55' and 5 * '5' = NaN. I don't want to see NaN or '55' in my calculations.

So if you want to have more predictable type checking - check my tests and welcome!

## Some wired cases

> Why do you treat new Number([]) as a number?

Because js will evaluate it to 0, and 0 is number.

> Why do you treat new number({}) as not a number?

Because js will evaluate it to  NaN and NaN is not a number according to my purposes.
