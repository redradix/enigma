// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }
// 'tag = triki' => { tag: triki }
// 'tag in (triki,traun)' => { tag: { $in: ['triki', 'traun'] } }
// 'name not bla' => { name: { $not: 'bla' } }
// 'name not in (bla,ble,bli)' => { name: { $nin: ['bla', 'ble', 'bli'] } }

const parseSpecialOperator = (key, operator, value) => {
  return {
    [key]: {
      [`\$${operator}`]: value.startsWith('(')
        ? value.replace(/[\(\)]/g, '').split(',')
        : value,
    },
  }
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

  if (elements.length === 3) {
    const [key, operation, value] = elements

    switch (operation) {
      case 'in':
      case 'not': {
        return parseSpecialOperator(key, operation, value)
      }
      case '=': {
        return { [key]: value }
      }
      default: {
        throw new Error('unknown operator')
      }
    }
  }

  if (elements.length === 4) {
    const [key, operation, subOperation, value] = elements

    return parseSpecialOperator(key, 'nin', value)
  }

  return { name: elements[0] }
}

module.exports = {
  enigma,
}
