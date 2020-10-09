// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }
// 'tag = triki' => { tag: triki }
// 'tag in (triki,traun)' => { tag: { $in: ['triki', 'traun'] } }
// 'name not bla' => { name: { $not: 'bla' } }
// 'name not in (bla,ble,bli)' => { name: { $nin: ['bla', 'ble', 'bli'] } }

const ERROR_UNKNOWN_OPERATOR = 'unknown operator'

const buildOperation = (key, operator, value) => {
  return {
    [key]: {
      [`\$${operator}`]: value.startsWith('(')
        ? value.replace(/[\(\)]/g, '').split(',')
        : value,
    },
  }
}

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

  if (elements.length === 1) {
    return { name: elements[0] }
  }

  const key = elements[0]
  const operators = elements.slice(1, -1)
  const value = elements[elements.length - 1]

  if (arrayEquals(operators, ['='])) {
    return { [key]: value }
  }

  let operator

  if (arrayEquals(operators, ['in'])) {
    operator = 'in'
  }
  if (arrayEquals(operators, ['not'])) {
    operator = 'not'
  }
  if (arrayEquals(operators, ['not', 'in'])) {
    operator = 'nin'
  }

  if (!operator) throw new Error(ERROR_UNKNOWN_OPERATOR)
  return buildOperation(key, operator, value)
}

module.exports = {
  enigma,
}
