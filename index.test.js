describe('eNiGmA', () => {
  /*

  const SAMPLES = [
    { input: 1, expected: 2 }
  ]

  SAMPLES.forEach(sample => {
    it(`expects ${sample.input} to return ${sample.expected}`, () => {
      expect(1).toBe(2)
    })
  })

  */

  it('Returns first part of the string as the key and the second part of it as the value of the object ', () => {
    expect(eNiGmA('name = foo')).toEqual({ name: 'foo' })
  })
})



// 'name = foo' => { name: 'foo' }
