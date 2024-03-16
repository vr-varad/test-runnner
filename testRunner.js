const {report} = require('./testReporter');
const {equal,end} = require('./assertions');


function executeTest(name, testFunction) {
    try {
        console.log(`${name}`);
        testFunction(assertionMethods);
    } catch (error) {
        throw error;
    }
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
