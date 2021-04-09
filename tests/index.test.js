import { TestScheduler } from '@jest/core'
import { sum, URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('sum', () => {
	test('adds 2+1 to equal 3', () => {
		expect(sum(2,1)).toBe(3)
		expect(sum(205, 400)).toBe(605)
	})
})

describe('URLSlug', () => {
	test('should remove spaces and uppercaseLetters', () => {
		expect(URLSlug('W O R D S')).toBe('w-o-r-d-s')
		expect(URLSlug('sOmE URL')).toBe('some-url')
	})

	test('an input word should be lowercased', () => {
		expect(URLSlug('IRONHACK')).toBe('ironhack')
		expect(URLSlug('Programmer')).toBe('programmer')
	})
})

describe('initials', () => {
	test('Should return initial of name uppercased', () => {
		expect(initials('javier')).toBe('J.')
		expect(initials('JAVIER REPILADO')).toBe('J.R.')
	})
	
	test('input must be a string', () => {
		expect(() => initials(2)).toThrow('')
	})
})

describe('monthName', () => {  
	test('it returns the month name', () => {
		expect(monthName(0)).toBe('january')
		expect(monthName(2)).toBe('march')
		expect(monthName(5)).toBe('june')
		expect(monthName(11)).toBe('december')
	})

	test('it should throw an error', () => {
		expect(() => monthName(12)).toThrow('There are only 12 months!')
	})
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
	test('Should return number rounded to 2 decimals', () => {
		expect(withTwoDecimals(10.02203)).toBeCloseTo(10.02)
		expect(withTwoDecimals(2345.39359758324)).toBeCloseTo(2345.39)
	})
})

describe('twoDigitsNum', () => {
	test('It should return a two-number string', () => {
		expect(twoDigitsNum(2)).toBe('02')
		expect(twoDigitsNum(20)).toBe('20')
	})

})

describe('removeDuplicates', () => {
	test('Should remove duplicates from array', () => {
		const duplicates = ['Javier', 'Pepe', 'Paco', 'Javier']
		expect(removeDuplicates(duplicates)).toEqual(['Javier', 'Pepe', 'Paco'])
	})
})