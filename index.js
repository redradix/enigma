const eNiGmA = (input) => {
  let value

  if (input.includes('=')) {
    ([, value] = input.split(' = '))
  } else {
    value = input
  }

  return {
    name: value,
  }
}

module.exports = {
  eNiGmA,
}
