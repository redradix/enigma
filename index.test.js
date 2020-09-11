const { eNiGmA } = require('./index')

const example = (title, samples) => {
  describe(title, () => {
    samples.forEach(sample => {
      it(`expects ${sample.input} to return ${JSON.stringify(sample.expected)}`, () => {
        expect(eNiGmA(sample.input)).toEqual(sample.expected)
      })
    })
  })
}

describe('eNiGmA', () => {
  example(
    'Returns first part of the string as the key and the second part of it as the value of the object ',
    [
      { input: 'name = foo', expected: { name: 'foo' } },
      { input: 'name = bar', expected: { name: 'bar' } },
      { input: 'name = lol', expected: { name: 'lol' } },
      { input: 'tag = triki', expected: { tag: 'triki' } },
      { input: 'hello = goodbye', expected: { hello: 'goodbye' } },
    ],
  )

  example(
    'Managing the input when it only receives the second part',
    [
      { input: 'foo', expected: { name: 'foo' } },
      { input: 'bar', expected: { name: 'bar' } },
      { input: 'lol', expected: { name: 'lol' } },
    ],
  )

  example(
    'Managing the input when receiving more than one value',
    [
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
  )

  example(
    'Managing the input when receiving a "not" inside',
    [
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
  )


  example(
    'Managing the input when receiving a "not" inside',
    [
      {
        input: 'name in (foo,bar,baz)', expected: { name: { $in: ['foo', 'bar', 'baz'] } },
        input: 'test in (1,2,3)', expected: { test: { $in: ['1', '2', '3'] } },
      },
    ]
  )

  example(
    'Managing the input when receiving "or" inside the input',
    [
      {
        input: 'name = foo or tag = triki', expected: {
          $or: [
            { name: 'foo' },
            { tag: 'triki' }
          ]
        }
      },
      {
        input: 'name = foo or tag = triki or hello = goodbye', expected: {
          $or: [
            { name: 'foo' },
            { tag: 'triki' },
            { hello: 'goodbye' },
          ]
        }
      },
    ]
  )

  example(
    'Managing the input when receiving "not in" inside the input',
    [
      {
        input: 'name not in (bla,ble)',
        expected: { name: { $nin: ['bla', 'ble'] } },
      }
    ],
  )
})
