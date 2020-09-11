const eNiGmA = (value) => {
  return {
    name: value.includes('foo') ? 'foo' : 'bar'
  }
}

module.exports = {
  eNiGmA,
}
