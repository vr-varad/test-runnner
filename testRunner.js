const {report} = require('./testReporter');
const {equal,end} = require('./assertions');


 function executeTest(name, testFunction) {
    console.log(`${name}`);
    testFunction(assertionMethods)
}

 function runTests(testCount, passedCount) {
    report(testCount, passedCount);
}



const assertionMethods = {
    equal,
    end
};


module.exports = {
    executeTest,
    runTests
};
