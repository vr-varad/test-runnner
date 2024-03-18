const {executeTest, runTests} = require('./testRunner');
let {testCount,passedCount} = require('./globals/index.js')

const test =  (description, testFunction) => {
        global.description = description
        global.testCount++;
        executeTest(description, testFunction);
        if (global.result && typeof global.result === 'object' && Object.keys(global.result).length === 0) {
                global.passedCount++;
        }
        
};
const end =  () => {
     runTests();
}

module.exports = {
        test,end
        };