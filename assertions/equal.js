
 async function equal(expected, actual, msg) {
    global.message = msg;
    if (actual !== expected) {
        global.result =  {
            actual,
            expected,
            message
        }
    }else{
        global.result = {}
    }
}

module.exports = equal;
