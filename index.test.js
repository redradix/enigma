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

  describe('Managing the input when it only receives the second part', () => {
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
