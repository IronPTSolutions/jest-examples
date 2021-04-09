export const sum = (num1, num2) => {
  return num1 + num2
}

export const URLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);

export const initials = (name) => {
  if (typeof name !== 'string') {
    throw new Error('name must be an string')
  }

  return (
    name
      .split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}.`)
      .join('')
    )
}

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

export const monthName = place => {
  if (months[place]) {
    return months[place]
  }

  throw new Error('There are only 12 months!')
}

export const hasPrefix = (str, prefix) => str.startsWith(prefix)

export const withTwoDecimals = (num) => Math.round(100 * num) / 100

export const twoDigitsNum = num => `0${num}`.substr(-2)

export const removeDuplicates = arr => arr.filter((item, i) => arr.indexOf(item) === i)