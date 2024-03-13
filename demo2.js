const {describe,it,run} = require('./runner')
const demand =  require('must')
describe("testing2",()=>{
    it("substraction",()=>{
        demand(1-1).must.eql(0)
    })
})
