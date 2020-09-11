// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }
// 'tag = triki' => { tag: triki }
// 'tag in (triki,traun)' => { tag: { $in: ['triki', 'traun'] } }

const splitStringWithAnIn = (string) => {
  const [key, subkey, value] = string.split(' ')

  return {
    [key]: {
      [`\$${ subkey }`]: value.replace(/[\(\)]/g, '').split(','),
    }
  }
}

// string => obj
const enigma = string => {
  const elements = string.split('=')

  if (string.includes('in')) {
    return splitStringWithAnIn(string)
  }

  if (elements.length === 1) {
    return { name: elements[0] }
  } else {
    const [key, value] = elements
    return { [key.trim()]: value.trim() }
  }
}

module.exports = {
  enigma,
}
