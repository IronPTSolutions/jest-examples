import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('URLSlug', () => {
  test('should remove spaces and uppercase letters', () => {
    expect(URLSlug('Mi post numero 1')).toBe('mi-post-numero-1')
    expect(URLSlug('PRUEBA NUMERO 2')).toBe('prueba-numero-2')
  })
  
  test('if I pass a word it only changes to lowercase', () => {
    expect(URLSlug('Post')).toBe('post')
    expect(URLSlug('ENTRADA')).toBe('entrada')
  })
  
})

describe('initials', () => {
  test('should return initials and .', () => {
    expect(initials('Manuel Carrillo')).toBe('M.C.')
    expect(initials('Pablo Laso')).toBe('P.L.')
  })

  test('should return a string', () => {
    expect(typeof initials('Manuel Carrillo')).toBe('string')
  })
  
})

describe('monthName', () => {
  test('should return month name', () => {
    expect(monthName(0)).toBe('january')
    expect(monthName(1)).toBe('february')
    expect(monthName(2)).toBe('march')
    expect(monthName(3)).toBe('april')
  })
  
  test('should throw an error', () => {
    expect(() => monthName(15)).toThrow('There are only 12 months!')
  })
  
})

describe('hasPrefix', () => {
  test('should return if string starts with x', () => {
    expect(hasPrefix('Prueba', 'Pru')).toBe(true)
    expect(hasPrefix('Prueba', 'eba')).toBe(false)
    expect(hasPrefix('Mi otra prueba', 'Mi')).toBe(true)
  })
  
})

describe('withTwoDecimals', () => {
  test('should return two digits number', () => {
    expect(withTwoDecimals(1.737733)).toBe(1.74)
    expect(withTwoDecimals(1.73)).toBe(1.73)
    expect(withTwoDecimals(150.999)).toBe(151)
  })
  
})

describe('twoDigitsNum', () => {
  test('should return a two digits number', () => {
    expect(twoDigitsNum(3)).toBe('03')
    expect(twoDigitsNum(9)).toBe('09')
    expect(twoDigitsNum(13)).toBe('13')
  })
  
})

describe('removeDuplicates', () => {
  test('should remove duplicates', () => {
    const arr2 = ['1', '1', '1', '2']
    const result = ['1', '2']

    expect(removeDuplicates(arr2)).toEqual(result)
  })
})