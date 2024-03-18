const {test,end} = require('./test');

test('Test Addition', (t) => {
    t.equal(2 + 2, 4, '2 + 2 should equal 4');
    t.end()
});

test('Test Subtraction', (t) => {
    t.equal(5 - 3, 4, '5 - 3 should equal 2');
    t.end()
});

test('test async nature',async function(t){
    const result =  await myAsyncFunction();
    console.log(result)
    t.equal(5 - 3, result, '5 - 3 should equal 2');
    t.end()
})

// test('Test Multiplication', (t) => {
//     t.equal(5 * 3, 15, '5 * 3 should equal 15');
//     t.end()
// });

end()

async function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}

