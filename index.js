const eNiGmA = (input) => {

  if (input.includes('and')) {
    const clauses = input.split(' and ')
    return {
      $and: clauses.map(getKeyValue),
    }
  }

  if (input.includes('or')) {
    const clauses = input.split(' or ')
    return {
      $or: clauses.map(getKeyValue),
    }
  }
  
  return getKeyValue(input)
}

const getKeyValue = (input) => {

  if (input.includes('=')) {
    const [key, value] = input.split(' = ')
    return {
      [key]: value,
    }
  }

  if (input.includes('not')) {
    const [key, value] = input.split(' not ')
    return {
      [key]: { $not: value },
    }
  }

  if (input.includes('in')) {
    const [key, valueString] = input.split(' in ')
    const cleanValueString = valueString.slice(1, -1)
    const values = cleanValueString.split(',')

    return {
      [key]: { $in: values }
    }
  }

  return {
    name: input,
  }

}

module.exports = {
  eNiGmA,
}


// 'name not bla' => { name: { $not: 'bla' } }
