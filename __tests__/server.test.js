const reverse = require('../server')

// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I',
      },
    },
  },
}

// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired',
      },
    },
  },
}

describe('Reverse Object', () => {
  test('is inputValue === outputValue', () => {
    expect(reverse(inputValue)).toMatchObject(outputValue)
  })
})
