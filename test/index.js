var nothing = require('../src/nothing')

const result = nothing()

var assertion = result === null
console.assert(assertion,`nothing() should return null but found ${result}` )

process.exit(!assertion)