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
    'Handles the "=" operator',
    [
      { input: 'name = foo', expected: { name: 'foo' } },
      { input: 'name = bar', expected: { name: 'bar' } },
      { input: 'name = lol', expected: { name: 'lol' } },
      { input: 'tag = triki', expected: { tag: 'triki' } },
      { input: 'hello = goodbye', expected: { hello: 'goodbye' } },
    ],
  )

  example(
    'Handles the IMPLICIT "=" operator (no key)',
    [
      { input: 'foo', expected: { name: 'foo' } },
      { input: 'bar', expected: { name: 'bar' } },
      { input: 'lol', expected: { name: 'lol' } },
    ],
  )

  example(
    'Handles the "and" conjunctiohn',
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
    'Handles the "not" operator',
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
    'Handles the "in" operator',
    [
      {
        input: 'name in (foo,bar,baz)', expected: { name: { $in: ['foo', 'bar', 'baz'] } },
        input: 'test in (1,2,3)', expected: { test: { $in: ['1', '2', '3'] } },
      },
    ]
  )

  example(
    'Handles the "or" conjunction',
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
    'Handles the "not in" operator',
    [
      {
        input: 'name not in (bla,ble)',
        expected: { name: { $nin: ['bla', 'ble'] } },
      }
    ],
  )
})
