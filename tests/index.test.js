import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('URLSlug', () => {
    test('should return url friendly', () => {
        expect(URLSlug('hola q tal')).toBe('hola-q-tal')
    })
})

describe('initials', () => {
    test('should return initials', () => {
        expect(initials('Mario')).toBe('M.')
    })
})

describe('monthName', () => {
    test('should return month name', () => {
        expect(monthName(0)).toBe('january');
        expect(monthName(11)).toBe('december')
        expect(() => monthName(12)).toThrow('There are only 12 months!')
    })
})

describe('hasPrefix', () => {
    test('should return right previx', () => {
        expect(hasPrefix('mario', 'm')).toBe(true);
        expect(hasPrefix('pedro', 'm')).toBe(false);
        expect(hasPrefix('Mario', 'm')).toBe(false);
    })
})

describe('withTwoDecimals', () => {
    test('should return number with 2 decimals', () => {
        expect(withTwoDecimals(1)).toBe(1.00)
    })
})

describe('twoDigitsNum', () => {
    test('should return a two-digit number', () => {
        expect(twoDigitsNum(1)).toBe('01')
        expect(twoDigitsNum(99)).toBe('99')
    })
})

describe('removeDuplicates', () => {
    test('should remove duplicated values', () => {
        expect(removeDuplicates([1,1,2,3])).toEqual([1,2,3])
    })
})