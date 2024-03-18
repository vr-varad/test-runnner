function report() {
    console.log()
    console.log(`# Running ${global.testCount} tests:`);
    console.log(`# --------------------------------`);
    console.log(`# `);
    console.log(`# Results:`);
    console.log(`#   Passed: ${global.passedCount}`);
    console.log(`#   Failed: ${testCount - passedCount}`);
    console.log(`# `);
}

module.exports = {
    report
};
