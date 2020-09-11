const { enigma } = require('./index')
const { TestScheduler } = require('jest')


describe('eNiGmA', () => {
  it('returns { name: "foo" }', () => {
    expect(enigma('name = foo')).toEqual({ name: 'foo' })
  })
})
