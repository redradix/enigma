// 'name = foo' => { name: 'foo' }

// string => obj
const enigma = (string) => {
  const [ key, value ] = string.split('=')

  return {
    [key.trim()]: value.trim()
  }
}

module.exports = {
  enigma,
}