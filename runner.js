const {EventEmitter} = require('events')
const {uuidv4} = require('./utils')
const {green,red} = require('colorette')

const emitter = new EventEmitter()

const handlers = new Map()
const stack = []

const pass = green('✓')
const fail = red('✗')

function reporterDescribe(suite){
    const depth = '  '.repeat(suite.depth)
    if(suite.depth === 0){
        console.log()
    }
    console.log(`${depth}${suite.title}`)
}
function reporterTest(suite){
    const depth = '  '.repeat(suite.depth)
    const symbol = suite.result.pass ? pass : fail
    console.log(`${depth}${symbol}${suite.title}`)
}



const describe = (title,handler)=>{
    emitter.emit('add: suite',({title,handler}))
}

const it = (title,handler)=>{
    emitter.emit('add: test',({title,handler}))
}

emitter.on('add: suite',({title,handler})=>{
    const id = uuidv4()
    const parent =  stack.length ? stack[stack.length-1] : undefined
    handlers.set(id,{
        id,
        title,
        parent,
        children : [],
        depth : stack.length,
        type : 'suite'
    })
    if(parent){
        handlers.get(parent).children.push(id)
    }
    stack.push(id)
    handler();
    stack.pop()
})

emitter.on('add: test',({title,handler})=>{
    const id = uuidv4()
    const parent =  stack.length ? stack[stack.length-1] : undefined
    if(parent){
        handlers.get(parent).children.push(id)
    }
    handlers.set(id,{
        id,
        title,
        parent,
        result : {
            pass: true
        },
        depth : stack.length,
        type : 'test',
        handler
    })
})


function run(){
    const rootSuites = Array.from(handlers).reduce((acc,curr)=>{
        return curr[1].parent === undefined ? [...acc,curr[0]] : acc
    },[])
    const summaries = []
    function printSummary(){
        console.log()
        for(const summary of summaries){
            const symbol = summary.result.pass ? pass : fail
            const failure = red('FAIL')
            console.log(`${failure} ${summary.title}`)
            console.log(`${symbol} ${summary.result.message}`)
        }
    }
    async function runSuite(ids){
        for(const id of ids){
            const suite = handlers.get(id)
            if(suite.type === 'suite'){
                reporterDescribe(suite)
                runSuite(suite.children)
            }
            if(suite.type === 'test'){
                try {
                    await suite.handler()
                } catch (error) {
                    if(error.name == 'AssertionError'){
                        suite.result = {
                            pass : false,
                            message : `Expected ${JSON.stringify(error.actual)} but got ${JSON.stringify(error.expected)}`
                        }
                    }
                }
                reporterTest(suite)
                if(!suite.result.pass){
                    summaries.push({
                        title : suite.title,
                        result : suite.result
                    })
                }
            }
            handlers.delete(suite.id)
            if(handlers.size === 0){
                printSummary()
            }
        }        
    }
    runSuite(rootSuites)
    
}

module.exports = {
    describe,
    it,
    run
}