var nothing = require('../src/nothing')

const result = nothing()

var assertion = result === undefined

console.assert(assertion,`nothing() should return undefined but found ${result}` )

process.exit(!assertion)