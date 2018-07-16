/**
 * Checks if value is real number. Supports Number object.
 * @param {any} num - value to check
 * @return {boolean} - returns true if value is true number
 */
function isNumberStrict(num: any): boolean {
    const check = num && typeof num.valueOf === 'function' ? num.valueOf() : num;
    return typeof check === 'number' && Number.isFinite(check);
}

export default isNumberStrict;
