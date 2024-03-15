function equal(actual, expected, message) {
    if (actual !== expected) {
        throw (`${message}. Expected ${expected}, but got ${actual}`);
    }
}

module.exports = { equal };
