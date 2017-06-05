import fs = require('fs')
import readline = require('readline')

function isPossibleTriangle(nums : Array<number>) {

    return nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0]
}

let stream = readline.createInterface(fs.createReadStream('./input.txt'))

let input = new Array([], [], [])

let numTriangles = 0
stream.on('line', l => {
    // console.log(l.trim())
    // if (isPossibleTriangle(l)) {
    //     numTriangles++
    // }

    let numbers = l.trim().split(/\s+/);

    input[0].push(+numbers[0])
    input[1].push(+numbers[1])
    input[2].push(+numbers[2])
}).on('close', () => {

    let inputs = input[0].concat(input[1], input[2])

    for(var i = 0; i < inputs.length; i += 3) {
        if (isPossibleTriangle([inputs[i], inputs[i+1], inputs[i+2]])) {
            numTriangles++;
        }
    }

    console.log(numTriangles)
})

// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20"))