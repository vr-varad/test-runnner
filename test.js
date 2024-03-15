const {executeTest, runTests} = require('./testRunner');

let testCount = 0;
let passedCount = 0;

const test = (description, testFunction) => {
        testCount++;
        try {
            executeTest(description, testFunction, testCount);
            passedCount++;
        } catch (error) {
            const errorLocation = new Error().stack.split("\n")[2].trim().split(" ")[2];
            console.log(`#${testCount} not ok ${description} not passed at ${errorLocation}`);
            console.log(error);
        }
};
const end = () => {
    runTests(testCount, passedCount);
}

module.exports = {
        test,end
        };