## in-house test-runner
This is a in house test-runner framework without any 3rd party testing framework.

#### Demo

demo.js
```
const {test,end} = require('./test');

test('Test Addition', (t) => {
    t.equal(2 + 2, 4, '2 + 2 should equal 4');
});

test('Test Subtraction', (t) => {
    t.equal(5 - 3, 4, '5 - 3 should equal 2');
});

test('Test Multiplication', (t) => {
    t.equal(5 * 3, 15, '5 * 3 should equal 15');
});

end()
```

result
```
#1 ok Test Addition passed
#2 not ok Test Subtraction not passed at (/home/varad/Desktop/testing/test-runner/tests.js:7:1)
5 - 3 should equal 2. Expected 4, but got 2
#3 ok Test Multiplication passed

# Running 3 tests:
# --------------------------------
# 
# Results:
#   Passed: 2
#   Failed: 1
# 

```
