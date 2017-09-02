const makeSet = require('../lib/makeSet.js')

describe('makeSet', () => {
  it('should generate object with values as keys', () => {
    const r = makeSet(['one', 'two', 'three', 'One.more'])
    r.should.have.property('one').that.is.ok
    r.should.have.property('two').that.is.ok
    r.should.have.property('three').that.is.ok
    r.should.have.property('One.more').that.is.ok
  })
})
