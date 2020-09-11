const eNiGmA = (input) => {
  if (input.includes('=')) {
    const [key, value] = input.split(' = ')

    return {
      [key]: value,
    }
  } else {
    return {
      name: input,
    }
  }
}

module.exports = {
  eNiGmA,
}
