// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }
// 'tag = triki' => { tag: triki }
// 'tag in (triki,traun)' => { tag: { $in: ['triki', 'traun'] } }
// 'name not bla' => { name: { $not: 'bla' } }

const parseSpecialOperator = (string) => {
  const [key, subkey, value] = string.split(' ')

  return {
    [key]: {
      [`\$${subkey}`]: (value.startsWith('(')) ? value.replace(/[\(\)]/g, '').split(',') : value,
    }
  }
}

// string => obj
const enigma = string => {
  const elements = string.split(' ')

  if (elements.length === 1) {
    return { name: elements[0] }
  }

  if (elements.length === 3) {
    const [key, operation, value] = elements

    switch (operation) {
      case 'in': return parseSpecialOperator(string)
      case 'not': return parseSpecialOperator(string)
      case '=': return { [key.trim()]: value.trim() }
    }
  }
}

module.exports = {
  enigma,
}
