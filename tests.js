const {test,end} = require('./test');

// test('Test Addition', (t) => {
//     t.equal(2 + 2, 4, '2 + 2 should equal 4');
//     t.end()
// });

// test('Test Subtraction', (t) => {
//     t.equal(5 - 3, 4, '5 - 3 should equal 2');
//     t.end()
// });

function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched successfully');
    }, 1000);
  }
  
  test('Async test example', function(t) {
    fetchData(function(data) {
      t.equal(data, 'Data fetched successfully', 'Data should be fetched successfully');
      t.end();
    });
  });


test('Test Multiplication', (t) => {
    t.equal(5 * 3, 15, '5 * 3 should equal 15');
    t.end()
});



end();