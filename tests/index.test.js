import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('URLSlug', () => {
  test('should remove spaces and uppercase letters', () => {
    expect(URLSlug('Ironhack labs')).toBe('ironhack-labs')
    expect(URLSlug('Ironhack summary')).toBe('ironhack-summary')
    expect(URLSlug('Ironhack labs solution')).toBe('ironhack-labs-solution')
  })

  test('if I pass a word it only changes to lowercase', () => {
    expect(URLSlug('Ironhack')).toBe('ironhack')
    expect(URLSlug('Programming')).toBe('programming')
  })
})

describe('initials', () => {
  test('It takes the first word', () => {
    expect(initials('Marco Monzón')).toBe('M.M.')
  })

  test('It returns an string', () => {
    expect(typeof initials('Marco Monzón')).toBe('string')
  })

  test('name param must be an input', () => {
    expect(() => initials(2)).toThrow('name must be an string')
    expect(() => initials([])).toThrow('name must be an string')
    expect(() => initials({})).toThrow('name must be an string')
  })
})

describe('monthName', () => {
  test('it return the month name', () => {
    expect(monthName(0)).toBe('january')
    expect(monthName(3)).toBe('april')
    expect(monthName(5)).toBe('june')
    expect(monthName(6)).toBe('july')
    expect(monthName(11)).toBe('december')
  })

  test('It should throw an error if month is not definded', () => {
    expect(() => monthName(12)).toThrow('There are only 12 months!')
  })
})

// describe('hasPrefix', () => {

// })

// describe('withTwoDecimals', () => {

// })

// describe('twoDigitsNum', () => {

// })

describe('removeDuplicates', () => {
  test('It should remove duplicates in an array', () => {
    const arr = [1, 2, 3, 4, 2, 3]
    const result = [1, 2, 3, 4]

    expect(removeDuplicates(arr)).toEqual(result)
  })
})