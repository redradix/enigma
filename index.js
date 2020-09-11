const eNiGmA = (input) => {
  const [, value] = input.split(' = ')

  return {
    name: value,
  }
}

module.exports = {
  eNiGmA,
}
