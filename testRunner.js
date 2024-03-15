const {report} = require('./testReporter');
const {equal} = require('./assertions');


function executeTest(name, testFunction,testCount) {
    try {
        testFunction(assertionMethods);
        console.log(`#${testCount} ok ${name} passed`);
    } catch (error) {
        throw error;
    }
}

function runTests(testCount, passedCount) {
    report(testCount, passedCount);
}

const assertionMethods = {
    equal
};


module.exports = {
    executeTest,
    runTests
};
