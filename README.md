## in-house test-runner
This is a in house test-runner framework without any 3rd party testing framework.

#### Demo

demo.js
```
const {test,end} = require('./test');

test('Test Addition', (t) => {
    t.equal(2 + 2, 4, '2 + 2 should equal 4');
    t.end()
});

test('Test Subtraction', (t) => {
    t.equal(5 - 3, 4, '5 - 3 should equal 2');
    t.end()
});

test('Test Multiplication', (t) => {
    t.equal(5 * 3, 15, '5 * 3 should equal 15');
    t.end()
});

end()
```

result
```
Test Addition
# ok 1 -> 2 + 2 should equal 4

Test Subtraction
# not ok 0 - Test Subtraction
------
actual- 2
expected- 4
message- 5 - 3 should equal 2
at- (/home/varad/Desktop/testing/test-runner/tests.js:8:1)
------

Test Multiplication
# ok 3 -> 5 * 3 should equal 15


# Running 3 tests:
# --------------------------------
# 
# Results:
#   Passed: 2
#   Failed: 1
# 

```
