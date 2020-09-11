// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }

// string => obj
const enigma = (string) => {
  const elements = string.split('=')
  return {
    name: (elements.length === 1) ? elements[0] : elements[1].trim()
  }
}

module.exports = {
  enigma,
}