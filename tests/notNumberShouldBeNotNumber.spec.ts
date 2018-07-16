import isNumberStrict from '../src';

const testData = [
    // tslint:disable-next-line:no-construct
    { value: new Number(Number.NEGATIVE_INFINITY)},
    // { value: new Number(Number.POSITIVE_INFINITY)},
    { value: Number.NEGATIVE_INFINITY},
    { value: Number.POSITIVE_INFINITY},
    { value: Number.NaN},
    { value: null},
    { value: undefined},
    { value: {}},
    { value: new Object()},
    { value: []},
    { value: ''},
    { value: '1'},
    { value: 'a'},
    { value: true},
    { value: false},
];

describe('isNumber function', () => {
    testData.forEach((input) => {
        it(`for ${input.value} should return false`, () => {
            expect(isNumberStrict(input.value)).toBeFalsy();
        });
    });
});
