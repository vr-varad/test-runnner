const {describe,it,run} = require('./runner')
const demand =  require('must')
describe("testing",()=>{
    it("addition",()=>{
        demand(1+1).must.eql(3)
    })
})

