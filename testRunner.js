const {report} = require('./testReporter');
const {equal,end} = require('./assertions');


async function executeTest(name, testFunction) {
    console.log(`${name}`);
    await testFunction(assertionMethods)
}

async function runTests(testCount, passedCount) {
    await report(testCount, passedCount);
}

const assertionMethods = {
    equal,
    end
};


module.exports = {
    executeTest,
    runTests
};
