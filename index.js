const eNiGmA = (input) => {
  if (input.includes('and')) {
    const clauses = input.split(' and ')
    return {
      $and: clauses.map(getKeyValue),
    }
  } else {
    return getKeyValue(input)
  }
}

const getKeyValue = (input) => {
  if (input.includes('=')) {
    const [key, value] = input.split(' = ')
    return {
      [key]: value,
    }
  } else if (input.includes('not')) {
    const [key, value] = input.split(' not ')
    return {
      [key]: { $not: value },
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


// 'name not bla' => { name: { $not: 'bla' } }