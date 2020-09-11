// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }

// string => obj
const enigma = string => {
  const elements = string.split('=')

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
