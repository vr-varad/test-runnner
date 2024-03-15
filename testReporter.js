function report(testCount, passedCount) {
    console.log()
    console.log(`# Running ${testCount} tests:`);
    console.log(`# --------------------------------`);
    console.log(`# `);
    console.log(`# Results:`);
    console.log(`#   Passed: ${passedCount}`);
    console.log(`#   Failed: ${testCount - passedCount}`);
    console.log(`# `);
}

module.exports = {
    report
};
