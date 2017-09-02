// Create an object with the array values as keys, and the values all set to 1
module.exports = function makeSet(source) {
  return source.reduce((acc, val) => Object.assign(acc, {[val]: 1}), {})
}
