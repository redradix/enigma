const eNiGmA = (input) => {
  let key = 'name', value

  if (input.includes('=')) {
    ([key, value] = input.split(' = '))
  } else {
    value = input
  }

  return {
    [key]: value,
  }
}

module.exports = {
  eNiGmA,
}
