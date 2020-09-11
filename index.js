const eNiGmA = (input) => {
  if (input.includes('and')) {
    const clauses = input.split(' and ')
    return {
      $and: clauses.map(divideByEqual),
    }
  } else {
    return divideByEqual(input)
  }
}

const divideByEqual = (input) => {
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
