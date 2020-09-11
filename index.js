// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }
// 'tag = triki' => { tag: triki }
// 'tag in (triki,traun)' => { tag: { $in: ['triki', 'traun'] } }
// 'name not bla' => { name: { $not: 'bla' } }

const splitStringWithAnIn = (string) => {
  const [key, subkey, value] = string.split(' ')

  return {
    [key]: {
      [`\$${subkey}`]: value.replace(/[\(\)]/g, '').split(','),
    }
  }
}

// string => obj
const enigma = string => {
  const elements = string.split(' ')

  if (string.includes('in')) {
    return splitStringWithAnIn(string)
  }

  if (elements.length === 1) {
    return { name: elements[0] }
  }

  if (elements.length === 3) {
    const [key, operation, value] = elements

    switch (operation) {
      case 'in': return splitStringWithAnIn(string)
      case '=': return { [key.trim()]: value.trim() }
    }
  }
}

console.log(enigma('name not bla'))

module.exports = {
  enigma,
}
