const { eNiGmA } = require('./index')

describe('eNiGmA', () => {
  describe('Returns first part of the string as the key and the second part of it as the value of the object ', () => {
    const SAMPLES = [
      { input: 'name = foo', expected: { name: 'foo' } },
      { input: 'name = bar', expected: { name: 'bar' } },
      { input: 'name = lol', expected: { name: 'lol' } },
      { input: 'tag = triki', expected: { tag: 'triki' } },
      { input: 'hello = goodbye', expected: { hello: 'goodbye' } },
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

  describe('Managing the input when receiving more than one value', () => {
    const SAMPLES = [
      {
        input: 'name = foo and tag = triki', expected: {
          $and: [
            { name: 'foo' },
            { tag: 'triki' }
          ]
        }
      },
      {
        input: 'name = foo and tag = triki and hello = goodbye', expected: {
          $and: [
            { name: 'foo' },
            { tag: 'triki' },
            { hello: 'goodbye' },
          ]
        }
      },
    ]

    SAMPLES.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })

  describe('Managing the input when receiving a "not" inside', () => {
    const SAMPLES = [
      {
        input: 'name not bla', expected: { name: { $not: 'bla' } }
      },
      {
        input: 'full not pep', expected: { full: { $not: 'pep' } }
      },
      {
        input: 'lol not pro', expected: { lol: { $not: 'pro' } }
      }
    ]

    SAMPLES.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })


  describe('Managing the input when receiving a "not" inside', () => {
    const SAMPLES = [
      {
        input: 'name in (foo,bar,baz)', expected: { name: { $in: ['foo', 'bar', 'baz'] } },
        input: 'test in (1,2,3)', expected: { test: { $in: ['1', '2', '3'] } },
      },
    ]

    SAMPLES.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })
})
