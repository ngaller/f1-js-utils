const spaceWords = require('../lib/spaceWords.js')

describe('spaceWords', () => {
  it('should translate case', () => {
    const r = spaceWords('TestOneTwoThree')
    r.should.equal('Test One Two Three')
  })

  it('should not touch other stuff', () => {
    const r = spaceWords('Testonetwothree')
    r.should.equal('Testonetwothree')
  })
})
