import { TestScheduler } from 'jest'
import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('URLSlug', () => {
  test('Returns a url-friendly slug from a string', () => {
      expect(URLSlug('ola k ase')).toBe('ola-k-ase')
      expect(URLSlug('no hay DOLOR')).toBe('no-hay-dolor')
      expect(URLSlug('soy de California')).toBe('soy-de-california')
  })
})

describe('initials', () => {
    test('Return the initials of every word in a given string', () => {
        expect(initials('Fernando Marin Sanchez')).toBe('F.M.S.')
        expect(initials('hola que haces')).toBe('H.Q.H.')
        expect(initials('Ironhack Student')).toBe('I.S.')
    })
})

describe('monthName', () => {
    test('Return a month name if I pass a number as parameter', () => {
        expect(monthName(0)).toBe('january')
        expect(monthName(1)).toBe('february')
        expect(monthName(2)).toBe('march')
        expect(monthName(3)).toBe('april')
    })

    test('Returns an error when the number is higher than eleven (11)', () => {
        expect(() => {monthName(12)}). toThrow(`There are only 12 months!`)
    })
})

describe('hasPrefix', () => {
    test('Return true if the string starts with the prefix', () => {
        expect(hasPrefix('robot: R2D2', 'robot')).toBe(true)
    })
})

describe('withTwoDecimals', () => {
    test('Return a number with two decimals', () => {
        expect(withTwoDecimals(133.566)).toBe(133.57)
    })

})

describe('twoDigitsNum', () => {
    test('Return a two digits number if put only a single number', () => {
        expect(twoDigitsNum(1)).toBe('01')
    })

})

describe('removeDuplicates', () => {
    test('Remove duplicate items from an array of items', () => {
        expect(removeDuplicates([1,2,3,4,4])).toEqual([1,2,3,4])
    })
})