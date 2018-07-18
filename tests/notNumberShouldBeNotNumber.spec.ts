/* tslint:disable: no-construct */

import isNumberStrict from '../src';

const testData = [
    { value: new Number(Number.NEGATIVE_INFINITY) },
    { value: new Number(Number.POSITIVE_INFINITY) },
    { value: new Number({}) },
    { value: new Number(undefined) },
    { value: new Number(NaN) },
    { value: Number.NEGATIVE_INFINITY },
    { value: Number.POSITIVE_INFINITY },
    { value: Number.NaN },
    { value: NaN },
    { value: null },
    { value: undefined },
    { value: {} },
    { value: new Object() },
    { value: [] },
    { value: '' },
    { value: '1' },
    { value: 'a' },
    { value: true },
    { value: false },
];

describe('isNumber function', () => {
    testData.forEach((input) => {
        it(`for ${input.value} should return false`, () => {
            expect(isNumberStrict(input.value)).toBeFalsy();
        });
    });
});
