function end() {
    if (global.result && typeof global.result === 'object' && Object.keys(global.result).length === 0) {
        console.log(`# ok ${global.testCount} -> ${global.message}`);
    }else{
        const stack = new Error().stack;
        const errorLocation = stack.split('\n')[2].trim();
        console.log(`# not ok ${global.testCount} - ${global.description}`);
        console.log('------');
        console.log('actual-',global.result.actual);
        console.log('expected-',global.result.expected);
        console.log('message-',global.result.message);
        console.log('at-',errorLocation);
        console.log('------');
        console.log()
    }
    console.log()
}

module.exports = end ;