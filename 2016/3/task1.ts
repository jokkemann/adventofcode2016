import fs = require('fs')
import readline = require('readline')

export default function isPossibleTriangle(input : string) {
    let nums = input.trim().split(/\s+/).map((s) => +s);

    return nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0]
}

// let stream = readline.createInterface(fs.createReadStream('./input.txt'))

// let numTriangles = 0
// stream.on('line', l => {
//     console.log(l.trim())
//     if (isPossibleTriangle(l)) {
//         numTriangles++
//     }
// })

// console.log(numTriangles)

// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20"))