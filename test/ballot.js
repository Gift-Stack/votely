const Ballot = artifacts.require('Ballot')

contract('Ballot', (accounts) => {
  let ballot = null;
  before(async () => {
    ballot = await Ballot.deployed()
  });
  it('Should add a contestant', async () => {
    const add = await ballot.addContestant('Gift Opia', 'SLN')
    const get = await ballot.getContestant(1)
    assert.equal(get[0].toNumber(), 1)
    assert.equal(get[1], 'Gift Opia')
    assert.equal(get[2], 'SLN')
  })

})
