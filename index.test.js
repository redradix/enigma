describe('eNiGmA', () => {
  const SAMPLES = [
    { input: 1, expected: 2 }
  ]

  SAMPLES.forEach(sample => {
    it(`expects ${sample.input} to return ${sample.expected}`, () => {
      expect(1).toBe(2)
    })
  })
})
