const { eNiGmA } = require('./index')

describe('eNiGmA', () => {
  describe('Returns first part of the string as the key and the second part of it as the value of the object ', () => {
    const SAMPLES = [
      { input: 'name = foo', expected: { name: 'foo' } },
      { input: 'name = bar', expected: { name: 'bar' } },
      { input: 'name = lol', expected: { name: 'lol' } },
    ]

    SAMPLES.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })

  describe('Returns the string as a value with "name" as the key when the received string doesn\'t have the first part', () => {
    const SAMPLES = [
      { input: 'foo', expected: { name: 'foo' } },
      { input: 'bar', expected: { name: 'bar' } },
      { input: 'lol', expected: { name: 'lol' } },
    ]

    SAMPLES.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })
})



// 'bla' => { name: 'bla' }
