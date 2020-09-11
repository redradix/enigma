// sentence = a set of clauses separated by conjunctions
const parseSentence = (input) => {
  if (input.includes('and')) {
    const clauses = input.split(' and ')
    return {
      $and: clauses.map(parseClause),
    }
  }

  if (input.includes('or')) {
    const clauses = input.split(' or ')
    return {
      $or: clauses.map(parseClause),
    }
  }

  return parseClause(input)
}

// clause = key and value related by an operator
const parseClause = (input) => {
  if (input.includes('=')) {
    const [key, value] = input.split(' = ')
    return {
      [key]: value,
    }
  }

  if (input.includes('not in')) {
    const [key, valueString] = input.split(' not in ')
    const cleanValueString = valueString.slice(1, -1)
    const values = cleanValueString.split(',')

    return {
      [key]: { $nin: values }
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
  eNiGmA: parseSentence,
}
