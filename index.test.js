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
  it("'tag in (triki,traun)' must return { tag: { $in: ['triki', 'traun'] } }", () => {
    expect(enigma('tag in (triki,traun)')).toEqual({ tag: { $in: ['triki', 'traun'] } })
  })
  it("'name not bla' => { name: { $not: 'bla' } }", () => {
    expect(enigma('name not bla')).toEqual({ name: { $not: 'bla' } })
  })
})
