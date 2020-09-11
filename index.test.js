const { enigma } = require('./index')

describe('eNiGmA', () => {
  it("'name = foo' must return { name: 'foo' }", () => {
    expect(enigma('name = foo')).toEqual({ name: 'foo' })
  })
  it("'bla' must return { name: 'bla' }", () => {
    expect(enigma('bla')).toEqual({ name: 'bla' })
  })
  it("'tag = triki' must return { tag: triki }", () => {
    expect(enigma('tag = triki')).toEqual({ tag: 'triki' })
  })
})
