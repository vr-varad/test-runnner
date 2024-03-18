
 function equal(expected, actual, msg) {
    global.message = msg;
    if (actual !== expected) {
        global.result =  {
            actual,
            expected,
            message
        }
    }
}

module.exports = equal;
