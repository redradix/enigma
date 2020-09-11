const eNiGmA = (input) => {

  if (input.includes('and')) {
    const [first, second] = input.split(' and ')
    return {
      $and: [bla(first), bla(second)]
    }
  } else {
    return bla(input)
  }
}

const bla = (input) => {
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
