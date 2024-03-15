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



