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
];

describe('isNumber function', () => {
    testData.forEach((input) => {
        it(`for ${input.value} should return true`, () => {
            expect(isNumberStrict(input.value)).toBeTruthy();
        });
    });
});
