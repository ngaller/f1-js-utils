// Change camel case names to spaced words
module.exports = function spaceWords(s) {
  return s.replace(/([A-Z])/g, ' $1').replace(/^ /, '')
}
