
function equal(actual, expected, msg) {
    global.message = msg;
    if (actual !== expected) {
        throw ({
            actual,
            expected,
            message
        });
    }
}

module.exports = equal;
