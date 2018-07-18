/* tslint:disable: no-construct */

import isNumberStrict from '../src';

const testData = [
    { value: 0 },
    { value: 1 },
    { value: 1.1 },
    { value: -1.1 },
    { value: Math.PI },
    { value: Number.MAX_VALUE },
    { value: Number.MIN_VALUE },
    { value: Number(50) },
    { value: 5e3 },
    { value: 0xff },
    { value: new Number(5) },
    { value: new Number(true) },
    { value: new Number(null) },
    { value: new Number([]) }, // converted to 0
];

describe('isNumber function', () => {
    testData.forEach((input) => {
        it(`for ${input.value} should return true`, () => {
            expect(isNumberStrict(input.value)).toBeTruthy();
        });
    });
});
