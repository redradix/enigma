// 'name = foo' => { name: 'foo' }
// 'bla' => { name: 'bla' }

// string => obj
const enigma = (string) => {
  let value = null;
  const elements = string.split("=");

  if (elements.length === 1) {
    value = elements[0];
  } else {
    value = elements[1].trim();
  }

  return {
    name: value,
  };
};

module.exports = {
  enigma,
};
