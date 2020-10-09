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
        $and: [{ name: 'foo' }, { tag: 'triki' }],
      },
    },
    {
      input: 'name = foo or tag = triki',
      output: {
        $or: [{ name: 'foo' }, { tag: 'triki' }],
      },
    },
    {
      input: 'name = foo or tag = triki or tag = tronki',
      output: {
        $or: [{ name: 'foo' }, { tag: 'triki' }, { tag: 'tronki' }],
      },
    },
    {
      input: 'name = foo or tag = triki or tag not tronki',
      output: {
        $or: [{ name: 'foo' }, { tag: 'triki' }, { tag: { $not: 'tronki' } }],
      },
    },
    {
      input: 'name  =  foo',
      output: { name: 'foo' },
    },
    {
      input: 'name = foo and  tag = triki',
      output: {
        $and: [{ name: 'foo' }, { tag: 'triki' }],
      },
    },
    {
      input: 'name = foo or  tag = triki',
      output: {
        $or: [{ name: 'foo' }, { tag: 'triki' }],
      },
    },
    {
      input: 'name not   in (bla,ble,bli)',
      output: { name: { $nin: ['bla', 'ble', 'bli'] } },
    },
  ).forEach(({ input, output }) => {
    it(`${input} must return ${JSON.stringify(output)}`, () => {
      expect(enigma(input)).toEqual(output)
    })
  })

  Array.of(
    {
      input: 'name bla foo',
      exception: 'unknown operator',
    },
    {
      input: 'name bla not foo',
      exception: 'unknown operator',
    },
    {
      input: 'name = (bla,ble,bli)',
      exception: 'invalid literal value',
    },
  ).forEach(({ input, exception }) => {
    it(`${input} must throw ${exception}`, () => {
      expect(() => enigma(input)).toThrow(exception)
    })
  })
})
