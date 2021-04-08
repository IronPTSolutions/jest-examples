import { TestScheduler } from '@jest/core'
import { sum, URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('sum', () => {
	test('adds 2+1 to equal 3', () => {
		expect(sum(2,1)).toBe(3)
	})

	test('adds 205 + 400 to equal 605', () => {
		expect(sum(205, 400)).toBe(605)
	})
})

describe('URLSlug', () => {
	test('"W O R D S" string is returned as w-o-r-d-s', () => {
		expect(URLSlug('W O R D S')).toBe('w-o-r-d-s')
	})

	test('"sOmE URL" string is returned as some-url', () => {
		expect(URLSlug('sOmE URL')).toBe('some-url')
	})
})

describe('initials', () => {
	// test('input must be a string', () => {
	// 	//
	// })

	test('Should return initial of name uppercased', () => {
		expect(initials('javier')).toBe('J.')
	})
})

describe('monthName', () => {  
	// test('Should return march', () => {
	// 	expect(monthName('march')).toBe('march')
	// })

	// test('Throw error', () => {
	// 	expect(monthName()).toThrow('There are only 12 months!')
	// })
})

describe('hasPrefix', () => {
	test('"Jav" is the prefix of string "Javier" should be true', () => {
		expect(hasPrefix('Javier', 'Jav')).toBe(true)
	})

	test('Should return false when prefix does not match a string', () => {
		expect(hasPrefix('Javier', 'vaJ')).toBe(false)
	})
})

describe('withTwoDecimals', () => {
	test('10.02203 should be 10.02', () => {
		expect(withTwoDecimals(10.02203)).toBeCloseTo(10.02)
	})

	test('2345.39359758324 should be 10.02', () => {
		expect(withTwoDecimals(2345.39359758324)).toBeCloseTo(2345.39)
	})
})

describe('twoDigitsNum', () => {
	// How to test type of input?
	// test('input should of type number', () => {
	// 	expect(twoDigitsNum('some string')).toThrow(undefined);
	// })

	test('2 must be 02', () => {
		expect(twoDigitsNum(2)).toBe('02')
	})

	test('20 must be 20', () => {
		expect(twoDigitsNum(20)).toBe('20')
	})
})

describe('removeDuplicates', () => {
	test('Should remove duplicates from array', () => {
		const duplicates = ['Javier', 'Pepe', 'Paco', 'Javier']
		expect(removeDuplicates(duplicates)).toEqual(['Javier', 'Pepe', 'Paco'])
	})
})