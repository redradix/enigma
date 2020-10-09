const ERROR_UNKNOWN_OPERATOR = 'unknown operator'
const ERROR_INVALID_VALUE = 'invalid literal value'

const OPERATOR_MAP = [
  [['in'], '$in'],
  [['not'], '$not'],
  [['not', 'in'], '$nin'],
]

const arrayEquals = (array1, array2) => {
  if (array1.length !== array2.length) return false
  return array1.every((element, index) => element === array2[index])
}

// string => obj
const enigma = string => {
  if (string.includes('and')) {
    return {
      $and: string.split(/\s+and\s+/).map(enigma),
    }
  }

  if (string.includes('or')) {
    return {
      $or: string.split(/\s+or\s+/).map(enigma),
    }
  }

  const elements = string.split(/\s+/)

  const rawValue = elements[elements.length - 1]
  const value = rawValue.startsWith('(')
    ? rawValue.replace(/[\(\)]/g, '').split(',')
    : rawValue

  if (elements.length === 1) {
    if (Array.isArray(value)) throw new Error(ERROR_INVALID_VALUE)
    return { name: value }
  }

  const key = elements[0]
  const operators = elements.slice(1, -1)

  if (arrayEquals(operators, ['='])) {
    if (Array.isArray(value)) throw new Error(ERROR_INVALID_VALUE)
    return { [key]: value }
  }

  for (const [inOperator, outOperator] of OPERATOR_MAP) {
    if (arrayEquals(operators, inOperator)) {
      return {
        [key]: {
          [outOperator]: value,
        },
      }
    }
  }

  throw new Error(ERROR_UNKNOWN_OPERATOR)
}

module.exports = {
  enigma,
}
