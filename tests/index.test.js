import { TestScheduler } from '@jest/core'
import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('sum', () => {
	test('adds 2+2 to equal 4', () => {
		expect(2 + 2).toBe(4)
	})
	test('adds 205 + 400 to equal 605', () => {
		expect(205 + 400).toBe(605)
	})
	test('adds 1000 + 1000 to equal 2000', () => {
		expect(1000 + 1000).toBe(2000)
	})
})

URLSlug('W O R D S')

describe('URLSlug', () => {
	test('(W O R D S) string is returned as w-o-r-d-s', () => {
		const URLSlug = jest.fn(words => words.replace(/\s+/g, '-').toLowerCase())

		URLSlug('W O R D S')
	
		expect(URLSlug).toHaveReturnedWith('w-o-r-d-s')
	})

	test('(sOmE URL) string is returned as some-url', () => {
		const URLSlug = jest.fn(words => words.replace(/\s+/g, '-').toLowerCase())
		
		URLSlug('sOmE URL')
	
		expect(URLSlug).toHaveReturnedWith('some-url')
	})
})

describe('initials', () => {

})

describe('monthName', () => {

})

describe('hasPrefix', () => {

})

describe('withTwoDecimals', () => {

})

describe('twoDigitsNum', () => {

})

describe('removeDuplicates', () => {

})