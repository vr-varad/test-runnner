## in-house test-runner
This is a in house test-runner framework without any 3rd party testing framework.

### Enhancements that have to be done.
- transfer the ```npm must``` package assertions and many more assertions to inhouse code.
- working on test running command.
- describe only to run only test.
- working on reporter.
many more.


#### Demo

demo.js
```
const {describe,it,run} = require('./runner')
const demand =  require('must')
describe("testing",()=>{
    it("addition",()=>{
        demand(1+1).must.eql(3)
    })
})
```
demo1.js
```
const {describe,it,run} = require('./runner')
const demand =  require('must')
describe("testing2",()=>{
    it("substraction",()=>{
        demand(1-1).must.eql(0)
    })
})
```

result
```
testing
  ✗addition

testing2
  ✓substraction

FAIL addition
✗ Expected 2 but got 3

```
