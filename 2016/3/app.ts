import isPossibleTriangle from './task1'
import fs = require('fs')
import readline = require('readline')

let stream = readline.createInterface(fs.createReadStream('./input.txt'))

let numTriangles = 0
let count = 0;
stream.on('line', line => {
    console.log('line', line.trim())
    if (isPossibleTriangle(line)) {
        numTriangles++
    }
    count++
}).on('close', () => {
    console.log(count, numTriangles)

})


// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20"))