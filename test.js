const {executeTest, runTests} = require('./testRunner');
let {testCount,passedCount} = require('./globals/index.js')

const test = (description, testFunction) => {
        global.testCount++;
        try {
            executeTest(description, testFunction);
            global.passedCount++;
        } catch (error) {
            const errorLocation = new Error().stack.split("\n")[2].trim().split(" ")[2];
            console.log(`# not ok ${testCount} - ${description}`);
            console.log('------');
            console.log('actual-',error.actual);
            console.log('expected-',error.expected);
            console.log('message-',error.message);
            console.log('at-',errorLocation);
            console.log('------');
            console.log()
        }
};
const end = () => {
    runTests(testCount, passedCount);
}

module.exports = {
        test,end
        };