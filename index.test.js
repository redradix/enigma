const { enigma } = require('./index')

describe('eNiGmA', () => {
  Array.of(
    {
      input: 'name = foo',
      output: { name: 'foo' },
    },
    {
      input: 'bla',
      output: { name: 'bla' },
    },
    {
      input: 'tag = triki',
      output: { tag: 'triki' },
    },
    {
      input: 'tag in (triki,traun)',
      output: { tag: { $in: ['triki', 'traun'] } },
    },
    {
      input: 'name not bla',
      output: { name: { $not: 'bla' } },
    },
    {
      input: 'name not in (bla,ble,bli)',
      output: { name: { $nin: ['bla', 'ble', 'bli'] } },
    },
    {
      input: 'name = foo and tag = triki',
      output: {
        $and: [
          { name: 'foo' },
          { tag: 'triki' },
        ]
      }
    },
  ).forEach(({ input, output }) => {
    it(`${input} must return ${JSON.stringify(output)}`, () => {
      expect(enigma(input)).toEqual(output)
    })
  })
})
